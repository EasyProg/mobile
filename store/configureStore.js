import { createStore, applyMiddleware, compose } from 'redux';
import videoApp from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
export default function createAppStore(initialState)
{
    const  store = createStore(videoApp,applyMiddleware(thunkMiddleware), initialState);
    return store
}