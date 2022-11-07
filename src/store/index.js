
import { createStore, combineReducers, compose } from 'redux';
import { counterReducer, authReducer } from './reducers';

const reducers = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

// recipe
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;