import React from 'react'
import { HomeCardContent } from './components/HomeCardContent';
import { HomeCardTitle } from './components/HomeCardTitle';
import * as S from './styles';

export const HomeCard = ({
  key,
  index,
  homecard,
  onPrevious,
  onNext,
  active,
}) => {
  return (
    <S.HomeCard index={index} active={active} >
      <HomeCardTitle 
        homecard={homecard} 
        onPrevious={onPrevious} 
        onNext={onNext} 
      />
      <HomeCardContent homecard={homecard} />
    </S.HomeCard>
  );
};