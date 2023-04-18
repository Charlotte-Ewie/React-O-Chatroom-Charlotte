import './styles.scss';
import { Send } from "react-feather";
import { useSelector, useDispatch } from 'react-redux';
import { newMessage, sendMessage } from "../actions/newMessage";


/** Je veux pouvoir envoyer un message dans le chat
 * 1- On va charger useDispatch()
 * 2- On va récupérer inputValue dans le state avec useSelector
 * 3- On va retourner le contenu du composant
 */

const Form = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.inputValue);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.lenght < 1) return;
        dispatch(sendMessage());
      }}
    >
      <input
        type="text"
        className='form-input'
        placeholder='Votre message ici...'
        value={inputValue}
        onChange={(e) => {
          dispatch(newMessage(e.target.value))
        }}
      />
      <button type="submit" className="form-button">
        <Send size={48} />
      </button>

    </form>
  )
}

export default Form;
