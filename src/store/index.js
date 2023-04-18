import { createStore, applyMiddleware } from 'redux';    // On importe createStore depuis redux

import reducer from './reducer';        // On importe notre fonction reducer
import authMiddleware from '../middlewares/authMiddlewares';
import websocketMiddleware from '../middlewares/webSocketMiddleware';

const store = createStore(reducer, applyMiddleware(authMiddleware, websocketMiddleware));     // On créé un store et on lui passe notre reducer en argument

export default store;
