import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const symLink = ({ dispatch, getState }) => next => action => {
  return next({
    ...action,
    type: action.sym.name || 'anonymous',
  });
};


const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(symLink),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension() :
        f => f
  )(createStore);

export default function create(data) {
  return finalCreateStore(reducer, data);
}
