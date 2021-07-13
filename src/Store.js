import { createStore } from 'redux';
import { reducerCounter } from './reducers/reducerCounter';

export const store = createStore(
    reducerCounter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
