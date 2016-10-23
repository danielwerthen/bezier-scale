import { createSelector } from 'reselect';
import { connect } from 'react-redux';

const handleSelector = (idx) => createSelector(
  state => state.points[`handle${idx}`],
  state => state.points[`handle${idx}Offset`],
  (nil, { offset = 0 }) => offset,
  (a, b, offset) => [
    a[0] * (1 - offset) + b[0] * offset,
    a[1] * (1 - offset) + b[1] * offset,
  ]
);

const mapState = () => {
  return createSelector(
    state => state.points.anchor0,
    state => state.points.anchor1,
    handleSelector(0),
    handleSelector(1),
    (a0, a1, h0, h1) => ({
      value: [...h0, ...h1, ...a0, ...a1],
    })
  );
};

export default connect(mapState);
