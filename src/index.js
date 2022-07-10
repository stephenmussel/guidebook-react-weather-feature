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
    yield takeEvery('FETCH_WEATHER', fetchWeather);
    yield takeEvery('FETCH_SEARCH', fetchSearch);
}

function* fetchSearch(action) {
    try {
        console.log('fetchSearch saga wired!');
        const response = action.payload;
        console.log('response:', response);

        yield put({ type: 'SET_SEARCH', payload: response })
        
    } catch(err) {
        console.log('err in fetching search:', err);
    }
}

function* fetchWeather() {
    try {
        console.log('fetchWeather saga wired!');

        const response = yield axios.get('/api/weather');
        console.log('response.data:', response.data);
        const action = { type: 'SET_WEATHER', payload: response.data};
        yield put(action);

    } catch(err) {
        console.log('err in fetching weather:', err);
    }
}

const search = (state = [], action) => {
    switch(action.type) {
        case 'SET_SEARCH':
            return action.payload;
        default:
            return state;
    }
}

const weather = (state = [], action) => {
    if(action.type === 'SET_WEATHER') {
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        weather,
        search,
    }),
    applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
