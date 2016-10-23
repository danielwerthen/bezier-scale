import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { updatePoint } from './redux';

const mapState = () => {
  return createSelector(
    (state, { handleName }) =>
      state.points[handleName],
    (state, { anchorName }) =>
      state.points[anchorName],
    (center, anchor) => ({
      center,
      anchor: anchor || center,
    })
  );
};

const mapDispatch = (dispatch, props) => {
  const {
    handleName,
    x,
    y,
    inverseX,
    inverseY,
  } = props;
  const mapper = mapState();
  return {
    onMove(dx, dy) {
      dispatch((dispatch, getState) => {
        const state = getState();
        const {
          center,
        } = mapper(state, props);
        const vx = x(center[0]);
        const vy = y(center[1]);
        dispatch(updatePoint(handleName, [
          inverseX(vx + dx),
          inverseY(vy + dy),
        ]));
      });
    },
  };
};

export default connect(mapState, mapDispatch);
