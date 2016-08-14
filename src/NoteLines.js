import _ from 'lodash';
import React from 'react';
import BezierComponent from './BezierComponent';
import pure from './pure';

class NoteLines extends BezierComponent {

  render() {
    const { x, y } = this;
    const {
      stroke,
      color,
      noteLines,
    } = this.props;

    return <g>
    {
      [].map((line, idx) => (<text
        x={x(0) - 24}
        y={y((idx + 1)/ (notes.length + 1)) + 5}
        key={idx}
        fontFamily="monospace"
        fontSize="14"
      >
        {note}
      </text>))
    }
    {
      noteLines.map(({ line }, idx)=> (<line
        key={`x${idx}`}
        stroke={color}
        strokeWidth={stroke}
        x1={x(line.p1.x)}
        y1={y(line.p1.y)}
        x2={x(line.p2.x)}
        y2={y(line.p2.y)}
      />))
    }
    </g>;
  }
}

export default pure(NoteLines);
