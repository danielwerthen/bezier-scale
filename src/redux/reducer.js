import { set } from './index';
import _ from 'lodash';

const reducers = {
  [set]: (state, action) => {
    const {
      changes,
    } = action;
    return _.reduce(changes, (sum, val, key) => {
      const toMerge = _.set({}, key, val);
      return _.merge({}, sum, toMerge);
    }, state);
  },
};

export default function reducer(state = {}, action) {
  const {
    sym,
  } = action;
  const r = reducers[sym];
  if (r) {
    return r(state, action);
  }
  return state;
}
