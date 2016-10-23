import { updatePoint } from '../index';

const reducers = {
  [updatePoint]: (state, action) => {
    const {
      name,
      value,
    } = action;
    return {
      ...state,
      [name]: value,
    };
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
