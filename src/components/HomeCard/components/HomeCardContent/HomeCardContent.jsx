import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export const HomeCardContent = ({
  homecard,
}) => {

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(homecard.endpoint);
  }

  return (
    <S.HomeCardContent onClick={onClickHandler}>
      {homecard.icon}
    </S.HomeCardContent>
  )
};