import React from 'react';
import { useSelector } from 'react-redux';

const Form = () => {

  return (

    <form className="form">
      <input
        type="text"
        className='form-input'
        placeholder='Votre meilleur message ici...'
        value=''
      />
      <button type="submit" className="" />


    </form>
  )

}





export default Form;
