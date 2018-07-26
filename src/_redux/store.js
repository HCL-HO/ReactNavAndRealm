import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import navigation from '_redux/reducer/navigation';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    navigation,
});

export default createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
);
