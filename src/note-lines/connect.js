import _ from 'lodash';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { noteToString } from '../Note';

function lines(lineCount) {
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

function gridLines(notes, lineCount) {
  return lines(lineCount).map((line, idx) => ({
    line,
    label: noteToString(
      notes[idx % notes.length],
      Math.floor(idx / notes.length)
    ),
  }));
}

const mapState = () => createSelector(
  state => state.settings.notes,
  state => state.settings.lineCount,
  (...args) => ({
    lines: gridLines(...args),
  })
);

export default connect(mapState);
