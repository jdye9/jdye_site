import { React, useState } from 'react';
import HomeCard from '../components/HomeCard';
import { CgProfile } from 'react-icons/cg';
import { BiNews } from 'react-icons/bi';
import { GiGearHammer } from 'react-icons/gi';
import './Home.css';

const Home = () => {

    let homecards = [ 'About Me', 'Resume', 'Projects' ];
    let icons = [ 
      <CgProfile style={
        {
          filter: 'invert(68%) sepia(21%) saturate(254%) hue-rotate(314deg) brightness(92%) contrast(98%)',
          width: '80%',
          height: '80%',
        }}/>,
      <BiNews style={
        {
          filter: 'invert(68%) sepia(21%) saturate(254%) hue-rotate(314deg) brightness(92%) contrast(98%)',
          width: '80%',
          height: '80%',
        }}/>, 
      <GiGearHammer style={
        {
          filter: 'invert(68%) sepia(21%) saturate(254%) hue-rotate(314deg) brightness(92%) contrast(98%)',
          width: '80%',
          height: '80%',
        }}/> 
    ];

    const [current, setCurrent] = useState(0);

    const onNextHandler = () => {
      setCurrent((current) => {
        if (current < icons.length -1) return current + 1
        return 0
      })
    }

    const onPreviousHandler = () => {
      setCurrent((current) => {
        if (current > 0) return current - 1;
        return icons.length - 1;
      })
    }

    return (
      <div className='home-root'>
        { homecards.map((title,index) => {
          return (
            <HomeCard key={index+title} index={index} title={title} icon={icons[index]} onPrevious={onPreviousHandler} onNext={onNextHandler} active={current}/>
          )
        })}
      </div>
    )
}

export default Home