import { React, useState } from 'react';
import { HomeCard } from '../../components/HomeCard';
import { PageSlider } from '../../components/UI/PageSlider/PageSlider';
import { homeData } from './utils';
import * as S from './styles';

export const Home = () => {

  const [current, setCurrent] = useState(0);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  const [prevButtonClicked, setPrevButtonClicked] = useState(false);

  const onNextHandler = () => {
    setNextButtonClicked(true);
    setPrevButtonClicked(false);
    setCurrent((current) => {
      if (current < homeData.length -1) return current + 1
      return 0
    });
  }

  const onPreviousHandler = () => {
    setPrevButtonClicked(true);
    setNextButtonClicked(false);
    setCurrent((current) => {
      if (current > 0) return current - 1;
      return homeData.length - 1;
    })
  }

  return (
    homeData.map((homecard, index) => {
      return index === current && 
        (
          <S.Home>
            <HomeCard 
              key={index+homecard.title} 
              homecard={homecard} 
              onPrevious={onPreviousHandler} 
              onNext={onNextHandler} 
            />
            <PageSlider
              index={index} 
              totalCount={homeData.length} 
              nextButtonClicked={nextButtonClicked}
              setNextButtonClicked={setNextButtonClicked}  
              prevButtonClicked={prevButtonClicked} 
              setPrevButtonClicked={setPrevButtonClicked}
            />
          </S.Home>
        )
      }
    )
  )
};