import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import nations from '../slice/nationslice';

const reducers = combineReducers({
  nationReducer: nations,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
