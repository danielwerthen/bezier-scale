import _ from 'lodash';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

function lines(barCount) {
  const size = 1 / (barCount);
  return _.range(0, barCount)
    .map(idx => ({
      p1: {
        x: idx * size,
        y: 0,
      },
      p2: {
        x: idx * size,
        y: 1,
      },
    }));
}

function gridLines(bars) {
  return lines(bars).map((line, idx) => ({
    line,
    label: idx + 1,
  }));
}

const mapState = () => createSelector(
  state => state.settings.bars,
  (...args) => ({
    lines: gridLines(...args),
    labelOffset: [-5, 24],
    lineOptions: {
      strokeDasharray: 10,
    },
  })
);

export default connect(mapState);
