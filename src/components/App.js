// == Import components
import Form from './Form';
import Messages from './Messages';
import Settings from './Settings';

import "./styles.scss";



const App = () => {

  return (

    <div className='app'>

      <h1> Résultat</h1>
      <Messages />
      <Form />
      <Settings />
    </div>

  )
}

export default App
