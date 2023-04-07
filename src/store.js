import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}; // Aquí se puede definir el estado inicial de la aplicación si es necesario

const middleware = [];

const store = createStore(
    rootReducer,
    initialState,
    //applyMiddleware(...middleware)
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;