import { createSelector } from 'reselect';



const getter = idx =>
  (state, { curveIndex = 0 }) => {
    const val = state.curves[curveIndex].value;
    return val && val[idx];
  };
export default () => {
  return createSelector(
    getter(0),
    getter(1),
    getter(2),
    getter(3),
    (...anchors) => anchors,
  );
};
