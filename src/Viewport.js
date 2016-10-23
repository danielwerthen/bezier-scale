import React from 'react';
import Curve from './Curve';
import Handle from './Handle';

function Viewport({
  children,
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

  const sharedProps = {
    xFrom: x(0),
    yFrom: y(0),
    xTo: x(1),
    yTo: y(1),
    x,
    y,
    inverseX,
    inverseY,
  };

  return (<svg
    width={width}
    height={height}
  >
    {React.Children.map(children, child =>
      React.cloneElement(child, sharedProps))}
  </svg>);
}

Viewport.defaultProps = {
  curveColor: "#333",
  curveWidth: 2,
  width: 900,
  height: 600,
  padding: [20, 20, 100, 100],
  handleProps: {
    radius: 5,
    stroke: 2,
    color: '#f00',
  },
};

export default Viewport;
