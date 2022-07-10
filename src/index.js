import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';

// Redux-Saga
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {

}

const weather = (state = {}, action) => {
    if(action.type === 'SET_WEATHER') {
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        weather,
    }),
    applyMiddleware(logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
