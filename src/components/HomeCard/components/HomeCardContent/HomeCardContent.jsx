import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HomeCardContent.css';

export const HomeCardContent = ({
  homecard,
}) => {

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(homecard.endpoint);
  }

  return (
    <div className='homecard-content grow' onClick={onClickHandler}>
      {homecard.icon}
    </div>
  )

}