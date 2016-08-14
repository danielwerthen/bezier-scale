import _ from 'lodash';
import { single } from './_base';

export function lines({
  lineCount = 10,
}) {
  const size = 1 / (lineCount + 1);
  return _.range(1, lineCount + 1)
    .map(idx => ({
      p1: {
        x: 0,
        y: idx * size,
      },
      p2: {
        x: 1,
        y: idx * size,
      },
    }));
}

export function noteLines(props) {
  const {
    notes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'],
  } = props;
  return lines(props).map((line, idx) => ({
    line,
    note: notes[idx % notes.length],
    octave: Math.floor(idx / notes.length),
  }));
}

export default single(noteLines);
