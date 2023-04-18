// == Import components
import Form from './Form';
import Messages from './Messages';
import Settings from './Settings';

import { useSelector } from 'react-redux';

import "./styles.scss";



const App = () => {

  const { pseudo } = useSelector((state) => state);

  return (

    <div className='app'>

      <Messages />
      {/* // L'utilisateur affiche le form uniquement si le pseudo n'est pas vide */}
      {pseudo !== "" && <Form />}
      <Settings />
    </div>

  )
}

export default App
