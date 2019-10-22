import { combineReducers } from 'redux';
import quotes from './quotesReducer';
import errors from './errorsReducer';

export default combineReducers({
 quotes,
 errors
});