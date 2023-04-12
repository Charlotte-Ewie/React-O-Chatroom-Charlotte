// == Import : npm
import React from 'react';
import ReactDOM from 'react-dom/client';



// Provider
import { Provider } from 'react-redux';

// == Import : local
import App from 'src/components/App';
import store from 'src/store';

// == Render
// On créé notre root avec ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// On déclenche le rendu de React (virtuel) => DOM (page web)
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
