import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';

import './HomeCard.css'

export const HomeCard = ({
  key,
  index,
  homecard,
  onPrevious,
  onNext,
  active,
}) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(homecard.endpoint);
  }

  return (
    <div className='homecard-root' style={{ 
        display: index === active ? 'flex' : 'none',
      }}>
      <div className='card-title'> 
      <BiLeftArrowCircle className='grow arrow' style={{
          minHeight:'75px',
          minWidth: '75px',
          color: '#BF9F9F',
        }}
        onClick={onPrevious}/>
        {homecard.title} 
        <BiRightArrowCircle className='grow arrow' style={{
          minHeight:'75px',
          minWidth: '75px',
          color: '#BF9F9F',
        }}
        onClick={onNext}/>
      </div>
      <div className='homecard-content grow' onClick={onClickHandler}>
        {homecard.icon}
      </div>
    </div>
  );
};