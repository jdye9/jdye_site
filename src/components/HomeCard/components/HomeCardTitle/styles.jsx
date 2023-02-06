import styled from "styled-components";
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';

export const HomeCardTitle = styled.div`
  display: flex;
  border-radius: 1rem;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,.2);
  position: relative;
  font-family: Bangers;
  color: #BF9F9F;
  background-color: white;
  width: 100%;
  font-size: 50px;
`

export const HomeCardTitleArrowLeft = styled(BiLeftArrowCircle)`
  height: 75px;
  width: 75px;
  color: '#BF9F9F';
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`

export const HomeCardTitleArrowRight = styled(BiRightArrowCircle)`
  min-height: 75px;
  min-width: 75px;
  color: '#BF9F9F';
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`