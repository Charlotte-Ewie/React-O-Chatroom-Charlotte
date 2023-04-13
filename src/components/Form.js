import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';


/** Je veux pouvoir envoyer un message dans le chat
 * 1- On va charger useDispatch()
 * 2- On va récupérer inputValue dans le state avec useSelector
 * 3- On va retourner le contenu du composant
 */

const Form = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.inputValue);

  return (
    <>
      <form
        className="form"
        onSubmit={console.log("j'ai submit")}
      >
        <input
          type="text"
          className='form-input'
          placeholder='Votre meilleur message ici...'
          value={inputValue}
          onChange={(e) => {
            dispatch({ type: "", newValue: e.target.value })
          }}
        />
        <button type="submit" className="form-button" onClick={() => dispatch(newFirstMessage(newValue))}> Envoyer </button>


      </form>
    </>
  )

}





export default Form;
