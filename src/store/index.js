import { createStore } from 'redux';    // On importe createStore depuis redux

import reducer from './reducer';        // On importe notre fonction reducer

const store = createStore(reducer);     // On créé un store et on lui passe notre reducer en argument

export default store;
