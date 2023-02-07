import React from 'react'
import { HomeCardContent } from './components/HomeCardContent';
import { HomeCardTitle } from './components/HomeCardTitle';
import * as S from './styles';

export const HomeCard = ({
  homecard,
  onPrevious,
  onNext,
}) => {
  return (
    <S.HomeCard>
      <HomeCardTitle
        homecard={homecard} 
        onPrevious={onPrevious} 
        onNext={onNext}
      />
      <HomeCardContent 
        homecard={homecard} 
      />
    </S.HomeCard>
  );
};