// == Import components
import Form from './Form';
import Messages from './Messages';
import Settings from './Settings';
import { toggleSettingsDisplay } from "../actions/newMessage"

import "./styles.scss";
import { PlusCircle } from "react-feather";

import { useSelector, useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();
  const toggleDisplay = useSelector((state) => state.settingsDisplayed);

  return (
    <>

      <PlusCircle className='btn-plus' onClick={() => dispatch(toggleSettingsDisplay())} size={35} />
      {toggleDisplay && <Settings />}
      <div className='app'>

        <h1> Résultat</h1>
        <Messages />
        <Form />

      </div>
    </>
  )
}

export default App
