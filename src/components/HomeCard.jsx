import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';

import './HomeCard.css'

const HomeCard = (props) => {

  const title = props.title;
  const index = props.index;
  const icon = props.icon;
  const active = props.active;
  const onPreviousHandler = props.onPrevious;
  const onNextHandler = props.onNext;

  const navigate = useNavigate();

  const onClickHandler = () => {
      const path = title.toLowerCase().replace(/\s/g, '').trim();
      console.log(path);
      navigate(path);
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
        onClick={onPreviousHandler}/>
        {title} 
        <BiRightArrowCircle className='grow arrow' style={{
          minHeight:'75px',
          minWidth: '75px',
          color: '#BF9F9F',
        }}
        onClick={onNextHandler}/>
      </div>
      <div className='homecard-content grow' onClick={onClickHandler}>
        {icon}
      </div>
    </div>
  );
}

export default HomeCard