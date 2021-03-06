import React from 'react';
import BezierComponent from './BezierComponent';

export default class Curve extends BezierComponent {

  render() {
    const {
      curveColor,
      curveWidth,
      value,
    } = this.props;
    const {x, y} = this;
    const sx = x(value[4]);
    const sy = y(value[5]);
    const ex = x(value[6]);
    const ey = y(value[7]);
    const cx1 = x(value[0]);
    const cy1 = y(value[1]);
    const cx2 = x(value[2]);
    const cy2 = y(value[3]);
    const curve = `M${sx},${sy} C${cx1},${cy1} ${cx2},${cy2} ${ex},${ey}`;

    return <path
      fill="none"
      stroke={curveColor}
      strokeWidth={curveWidth}
      d={curve} />;
  }
}

Curve.defaultProps = {
  curveColor: '#333',
  curveWidth: 1,
};
