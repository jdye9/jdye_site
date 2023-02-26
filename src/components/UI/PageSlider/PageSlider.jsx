import React from 'react';
import * as S from './styles';

export const PageSlider = ({
  index,
  totalCount,
  nextButtonClicked,
  setNextButtonClicked,
  prevButtonClicked,
  setPrevButtonClicked,
}) => {

  return (
    <S.SliderBody>
      <S.Slider 
        index={index} 
        totalCount={totalCount} 
        nextButtonClicked={nextButtonClicked}
        setNextButtonClicked={setNextButtonClicked} 
        prevButtonClicked={prevButtonClicked} 
        setPrevButtonClicked={setPrevButtonClicked}
      />
    </S.SliderBody>
  );
}