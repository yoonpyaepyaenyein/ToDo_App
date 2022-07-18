import {combineReducers, createStore, applyMiddleware} from 'redux';

import reduxThunk from 'redux-thunk';

import taskReducer from './reducer/task';

const rootReducer = combineReducers({
  taskLists: taskReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
