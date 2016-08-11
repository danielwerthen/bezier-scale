import React from "react";
import BezierComponent from "./BezierComponent";
import dnd from './dnd';

class Handle extends BezierComponent {

  render() {
    const { x, y } = this;
    const {
      index,
      radius,
      color,
      stroke,
      xval,
      yval,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      onMouseMove,
    } = this.props;

    const sx = x(index);
    const sy = y(index);
    const cx = x(xval);
    const cy = y(yval);
    const a = Math.atan2(cy-sy, cx-sx);
    const cxs = cx - radius * Math.cos(a);
    const cys = cy - radius * Math.sin(a);

    return <g>
      <line
        stroke={color}
        strokeWidth={stroke}
        x1={cxs}
        y1={cys}
        x2={sx}
        y2={sy}
      />
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill={color}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      />
    </g>;
  }
}

export default dnd(Handle);
