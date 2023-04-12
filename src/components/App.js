// == Import npm
import React from 'react';

// == Import components
import Form from './Form';
import Messages from './Messages';


const App = () => (  // Ici, le return est implicite
  <div className='app'>
    <h1> Résultat</h1>
    <Form />
    <Messages />


  </div>
)

export default App
