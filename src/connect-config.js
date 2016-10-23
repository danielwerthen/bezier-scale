import _ from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { set } from './redux';

const mapState = createSelector(
  state => state.settings,
  settings => ({
    settings,
  })
);

function mapDispatch(dispatch) {
  return {
    onChangePath(path, map = i => i, ...predicates) {
      return _.throttle((e, value) => {
        const v = map(value || _.get(e, 'target.value', e));
        if (!predicates.reduce((sum, p) => sum && p(v), true)) {
          return;
        }
        dispatch(set({
          [path]: v,
        }));
      }, 100, {
        leading: true,
        trailing: true,
      });
    },
  };
}

export default connect(mapState, mapDispatch);
