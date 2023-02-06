import React from 'react'
import { Socials } from '../Socials';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/');
  }

  return (
    <S.Navbar>
      <S.NavbarLogo onClick={onClickHandler}>Jared Dye</S.NavbarLogo>
      <Socials/>
    </S.Navbar>
  )
};