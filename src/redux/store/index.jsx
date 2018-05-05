import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import dataReducer from '../reducers';


const composeEnhancers = composeWithDevTools({});
const store = createStore(
    combineReducers({
        dataReducer,
    }),
    composeEnhancers(
        applyMiddleware(logger),
    ),
);
export default store;
