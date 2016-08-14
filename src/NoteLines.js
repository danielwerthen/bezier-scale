import React from 'react';
import ReactDOM from 'react';
import BezierComponent from './BezierComponent';
import pure from './pure';
import { noteToString } from './Note';

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
      noteLines.map(({ line, note, octave }, idx) => (<text
        x={x(0) - 48}
        y={y(line.p1.y) + 5}
        key={idx}
        fontFamily="monospace"
        fontSize="14"
      >
        {noteToString(note, octave)}
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
