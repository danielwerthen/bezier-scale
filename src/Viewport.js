import React from 'react';
import Curve from './Curve';
import Handle from './Handle';
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
}) {
  console.log(value);
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
    <Curve
      {...sharedProps}
      value={value}
      curveColor={curveColor}
      curveWidth={curveWidth}
    />
    <g>
      <Handle
        {...sharedProps}
        index={0}
        xval={value[0]}
        yval={value[1]}
        onMove={onMove(0)}
        {...handleProps}
      />
      <Handle
        {...sharedProps}
        index={1}
        xval={value[2]}
        yval={value[3]}
        onMove={onMove(1)}
        {...handleProps}
      />
    </g>
  </svg>);
}

Viewport.defaultProps = {
  value: [0.5, 0.25, 0.75, 0.75],
  curveColor: "#333",
  curveWidth: 2,
  width: 600,
  height: 600,
  padding: [100, 100, 100, 100],
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
