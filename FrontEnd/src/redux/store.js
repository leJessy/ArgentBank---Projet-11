import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './loginReducer';

const store = createStore(loginReducer, applyMiddleware(thunk));

export default store;