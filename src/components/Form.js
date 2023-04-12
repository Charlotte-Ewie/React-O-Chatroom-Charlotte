// import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react'

import { newFirstMessage } from '../actions/newMessage';

const Form = () => {
  const dispatch = useDispatch();
  const [newValue, setNewValue] = useState('');
  return (
    <>

      <form className="form">
        <input
          type="text"
          className='form-input'
          placeholder='Votre meilleur message ici...'
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button type="button" className="" onClick={() => dispatch(newFirstMessage(newValue))}> Envoyer </button>


      </form>
    </>
  )

}





export default Form;
