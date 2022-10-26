import { combineReducers } from 'redux';
import { busketReducer } from './busketReducer';
import { likesReducer } from './likesReducer';

export const rootReducer = combineReducers({
	busketReducer,
	likesReducer
});