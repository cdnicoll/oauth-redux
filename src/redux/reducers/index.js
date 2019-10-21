import { combineReducers } from 'redux';
import oauthReducers from './oauthReducers';

export default combineReducers({
  auth: oauthReducers
});
