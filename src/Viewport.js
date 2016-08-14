import React from 'react';
import Curve from './Curve';
import Handle from './Handle';
import NoteLines from './NoteLines';
import { connect } from 'react-redux';
import propSelector from './propSelector';
import { set } from './redux';

function Viewport({
  value,
  curveColor,
  curveWidth,
  width,
  height,
  padding,
  handleProps,
  onMoveHandle,
  ...rest,
}) {
  function x(value) {
    const w = width - padding[1] - padding[3];
    return Math.round(padding[3] + value * w);
  }

  function y(value) {
    const h = height - padding[0] - padding[2];
    return Math.round(padding[0] + (1-value) * h);
  }

  function inverseX(x) {
    const w = width - padding[1] - padding[3];
    return Math.max(0, Math.min((x-padding[3]) / w, 1));
  }

  function inverseY(y) {
    const clampMargin = 2 * handleProps.radius;
    const h = height - padding[0] - padding[2];
    y = Math.max(clampMargin, Math.min(y, height - clampMargin));
    return 1 - (y - padding[0]) / h;
  }

  function onMove(index) {
    return (dx, dy) => {
      const vx = x(value[index * 2]);
      const vy = y(value[index * 2 + 1]);
      if (onMoveHandle) onMoveHandle(
        index,
        inverseX(vx + dx),
        inverseY(vy + dy)
      );
    };
  }

  const sharedProps = {
    xFrom: x(0),
    yFrom: y(0),
    xTo: x(1),
    yTo: y(1)
  };

  return (<svg
    width={width}
    height={height}
  >
    <NoteLines
      {...sharedProps}
      {...rest}
      color={curveColor}
      stroke={curveWidth}
    />
    <Curve
      {...sharedProps}
      value={value}
      curveColor={curveColor}
      curveWidth={curveWidth}
    />
    <g>
      <Handle
        {...sharedProps}
        points={[
          ...value.slice(4,6),
          ...value.slice(4,6),
        ]}
        onMove={onMove(2)}
        {...handleProps}
      />
      <Handle
        {...sharedProps}
        points={[
          ...value.slice(6,8),
          ...value.slice(6,8),
        ]}
        onMove={onMove(3)}
        {...handleProps}
      />
      <Handle
        {...sharedProps}
        points={[
          ...value.slice(0,2),
          ...value.slice(4,6),
        ]}
        onMove={onMove(0)}
        {...handleProps}
      />
      <Handle
        {...sharedProps}
        points={[
          ...value.slice(2,4),
          ...value.slice(6,8),
        ]}
        onMove={onMove(1)}
        {...handleProps}
      />
    </g>
  </svg>);
}

Viewport.defaultProps = {
  value: [0.5, 0.25, 0.75, 0.75, 0, 0, 1, 1],
  curveColor: "#333",
  curveWidth: 2,
  width: 900,
  height: 600,
  padding: [10, 10, 10, 100],
  handleProps: {
    radius: 5,
    stroke: 2,
    color: '#f00',
  },
  onMoveHandle: (index, x, y) => {
    console.log(index, x, y);
  },
};

const mapState = propSelector({
  value: 'curves[0].value',
});

function mapDispatch(dispatch) {
  return {
    onMoveHandle(index, x, y) {
      dispatch(set({
        [`curves[0].value[${index * 2}]`]: x,
        [`curves[0].value[${index * 2 + 1}]`]: y,
      }));
    },
  };
}

export default connect(mapState, mapDispatch)(Viewport);
