import styled from 'styled-components';

export const HomeCard = styled.div`
  display: ${(props) => props.index === props.active ? 'flex' : 'none' };
  flex-direction: column;
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,.2);
  border-radius: 1rem;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  font-size: 35px;
  margin-left: .25rem;
  margin-right: .25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-width: 350px;
  width: 750px;
  background-color: #BF9F9F;
  gap: 20px;
  padding: 1rem;
`