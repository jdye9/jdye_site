import { React, useState } from 'react';
import { HomeCard } from '../../components/HomeCard';
import { CgProfile } from 'react-icons/cg';
import { BiNews } from 'react-icons/bi';
import { GiGearHammer } from 'react-icons/gi';
import * as S from './styles';

export const Home = () => {

  const homecards = [
    {
      title: 'About Me',
      icon: 
        <CgProfile style={
          {
            filter: 'invert(68%) sepia(21%) saturate(254%) hue-rotate(314deg) brightness(92%) contrast(98%)',
            width: '80%',
            height: '80%',
          }
        }
        />,
      endpoint: '/aboutme',
    },
    {
      title: 'Resume',
      icon:
        <BiNews style={
          {
            filter: 'invert(68%) sepia(21%) saturate(254%) hue-rotate(314deg) brightness(92%) contrast(98%)',
            width: '80%',
            height: '80%',
          }
        }
        />,
      endpoint: '/resume',
    },
    {
      title: 'Projects',
      icon: 
        <GiGearHammer style={
          {
            filter: 'invert(68%) sepia(21%) saturate(254%) hue-rotate(314deg) brightness(92%) contrast(98%)',
            width: '80%',
            height: '80%',
          }
        }
        />, 
      endpoint: '/projects'
    },
  ]

  const [current, setCurrent] = useState(0);

  const onNextHandler = () => {
    setCurrent((current) => {
      if (current < homecards.length -1) return current + 1
      return 0
    })
  }

  const onPreviousHandler = () => {
    setCurrent((current) => {
      if (current > 0) return current - 1;
      return homecards.length - 1;
    })
  }

  return (
    <S.Home>
      { homecards.map((homecard,index) => {
        return (
          <HomeCard 
            key={index+homecard.title} 
            index={index} 
            homecard={homecard} 
            onPrevious={onPreviousHandler} 
            onNext={onNextHandler} 
            active={current}
          />
        )
      })}
    </S.Home>
  )
};