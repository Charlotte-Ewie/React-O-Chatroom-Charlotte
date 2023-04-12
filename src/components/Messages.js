import React from 'react';
import { useSelector } from 'react-redux';

const Messages = () => {
  const firstMessage = useSelector((state => state.firstMessage));
  const secondMessage = useSelector((state) => state.secondMessage);
  const thirdMessage = useSelector((state) => state.thirdMessage);

  return (
    <div className='chat'>
      <ul>

        <li>{firstMessage}</li>
        <li>{secondMessage}</li>
        <li>{thirdMessage}</li>

      </ul>
    </div>
  )

}







export default Messages;
