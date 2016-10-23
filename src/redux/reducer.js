import { combineReducers } from 'redux';
import points from './reducers/points';
import settings from './reducers/settings';

export default combineReducers({
  points,
  settings,
});
