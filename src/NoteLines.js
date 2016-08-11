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
      notes,
    } = this.props;

    function lines(nr, dir) {
      const size = 1 / (nr + 1);
      return _.range(1, nr + 1)
        .map(idx => ({
          x1: x(dir ? idx * size : 0),
          y1: y(!dir ? idx * size : 0),
          x2: x(dir ? idx * size : 1),
          y2: y(!dir ? idx * size : 1),
        }));
    }
    const xLines = lines(notes.length, false);

    return <g>
    {
      notes.map((note, idx) => (<text
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
      xLines.map((pos, idx)=> (<line
        key={`x${idx}`}
        stroke={color}
        strokeWidth={stroke}
        {...pos}
      />))
    }
    </g>;
  }
}

NoteLines.defaultProps = {
  notes: ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'],
};

export default pure(NoteLines);
