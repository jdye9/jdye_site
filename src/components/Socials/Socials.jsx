import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles';

export const Socials = () => {
  return (
    <S.Socials>
      <S.Social href="https://www.linkedin.com/in/jareddye379/"
          id="linkedin-social" >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </S.Social>
      <S.Social href="https://github.com/jdye9"
          id="github-social" >
          <FontAwesomeIcon icon={faGithub} size="2x" />
      </S.Social>
      <S.Social href=""
          id="email-social" >
          <FontAwesomeIcon icon={faAt} size="2x" />
      </S.Social>
    </S.Socials>
  )
};