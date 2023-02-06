import React from 'react';
import * as S from './styles';

export const HomeCardTitle = (
  {
    homecard,
    onPrevious,
    onNext,
  }
) => {

  return (
    <S.HomeCardTitle> 
      <S.HomeCardTitleArrowLeft
        onClick={onPrevious}
      />
        {homecard.title} 
      <S.HomeCardTitleArrowRight
        onClick={onNext}
      />
    </S.HomeCardTitle>
  )


}