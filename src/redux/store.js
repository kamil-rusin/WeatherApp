import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
    weatherReducer: weatherReducer,
});

const middleware = [thunk];

const configureStore = () => createStore(rootReducer, applyMiddleware(...middleware));

export default configureStore;
