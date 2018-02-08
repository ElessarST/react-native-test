import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducers';
import { AsyncStorage } from 'react-native';

const store = createStore(
    reducers,
    undefined,
    applyMiddleware(thunk),
)

export default store;