import { CgProfile } from 'react-icons/cg';
import { BiNews } from 'react-icons/bi';
import { GiGearHammer } from 'react-icons/gi';

export const homeData = [
  {
    title: 'About Me',
    icon: 
      <CgProfile style={
        {
          filter: 'invert(68%) sepia(21%) saturate(254%) hue-rotate(314deg) brightness(92%) contrast(98%)',
          width: '100%',
          height: '100%',
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
          width: '100%',
          height: '100%',
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
          width: '100%',
          height: '100%',
        }
      }
      />, 
    endpoint: '/projects'
  },
]