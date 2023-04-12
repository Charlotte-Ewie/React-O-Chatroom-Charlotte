// == Import npm
import React from 'react';

// == Import components
import Form from './Form';
import Messages from './Messages';


const App = () => (  // Ici, le return est implicite
  <div className='app'>
    <Form />
    <Messages />


  </div>
)

export default App
