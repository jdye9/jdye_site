import styled from 'styled-components'

export const HomeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  border-radius: 1rem;
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,.2);
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`