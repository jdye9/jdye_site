import React from 'react';
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';
import './HomeCardTitle.css';

export const HomeCardTitle = (
  {
    homecard,
    onPrevious,
    onNext,
  }
) => {

  return (
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
  )


}