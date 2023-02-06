import styled from "styled-components";

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  height: 100%;
  margin-right: 1.5rem;
  margin-left: auto;
  align-items: center;
  gap: 10px;
`

export const Social = styled.a`
  transition: transform 250ms;
  color: #BF9F9F; 
  :hover {
    transform: translateY(-2px);
  }
`