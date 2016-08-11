import _ from 'lodash';
import { createSelector } from 'reselect';

function mapSelect(selector) {
  if (_.isFunction(selector)) {
    return (state, props) => _.get(state, selector(props));
  }
  return state => _.get(state, selector);
}

export default function propSelector(selects) {
  const keys = Object.keys(selects);
  return createSelector.apply(null, [
    ...keys.map(key => mapSelect(selects[key])),
    (...args) => args.reduce((sum, arg, idx) =>
      Object.assign(sum, { [keys[idx]]: arg }),
      {}),
  ]);
}
