import React from 'react'
import { HomeCardContent } from './components/HomeCardContent';
import { HomeCardTitle } from './components/HomeCardTitle';
import './HomeCard.css'

export const HomeCard = ({
  key,
  index,
  homecard,
  onPrevious,
  onNext,
  active,
}) => {
  return (
    <div className='homecard-root' style={{ 
        display: index === active ? 'flex' : 'none',
      }}>
        <HomeCardTitle 
          homecard={homecard} 
          onPrevious={onPrevious} 
          onNext={onNext} 
        />
        <HomeCardContent homecard={homecard} />
    </div>
  );
};