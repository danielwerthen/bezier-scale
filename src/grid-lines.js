import React from 'react';
import BezierComponent from './BezierComponent';

export default class GridLines extends BezierComponent {

  render() {
    const { x, y } = this;
    const {
      stroke,
      color,
      lines,
      lineOptions,
      labelOffset = [-48, 5],
    } = this.props;
    return <g>
    {
      lines.map(({ line, label }, idx) => (<text
        x={x(line.p1.x) + labelOffset[0]}
        y={y(line.p1.y) + labelOffset[1]}
        key={idx}
        fontFamily="monospace"
        fontSize="14"
      >
        {label}
      </text>))
    }
    {
      lines.map(({ line }, idx)=> (<line
        key={`x${idx}`}
        stroke={color}
        strokeWidth={stroke}
        {...lineOptions}
        x1={x(line.p1.x)}
        y1={y(line.p1.y)}
        x2={x(line.p2.x)}
        y2={y(line.p2.y)}
      />))
    }
    </g>;
  }
}

GridLines.defaultProps = {
  color: '#555',
  stroke: 1,
};
