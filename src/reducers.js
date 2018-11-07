import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import ideasReducer from './containers/Ideas/reducer';

const rootReducer = combineReducers({
  ideasReducer,
  form,
});

export default rootReducer;
