import { combineReducers } from 'redux';
import reports from './reports';
import utils from './utils';

const appReducer = combineReducers({
  reports,
  utils,
});

/* Not applicable in this demo but this would clear the whole state when a user logs out */
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
