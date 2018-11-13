import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import dataReducer from '../reducers';

const loadState = () => {
  const serializedState = localStorage.getItem('state');
  return JSON.parse(serializedState);
};
const composeEnhancers = composeWithDevTools({});
const getStore = recoverFromStorage => createStore(
  combineReducers({
    dataReducer,
  }),
  recoverFromStorage ? loadState() : undefined,
  composeEnhancers(
    applyMiddleware(logger),
  ),
);

export default getStore;
