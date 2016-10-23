import _ from 'lodash';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

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

function noteLines(notes, lineCount) {
  return lines(lineCount).map((line, idx) => ({
    line,
    note: notes[idx % notes.length],
    octave: Math.floor(idx / notes.length),
  }));
}

const mapState = () => createSelector(
  state => state.settings.notes,
  state => state.settings.lineCount,
  (...args) => ({
    noteLines: noteLines(...args),
  })
);

export default connect(mapState);
