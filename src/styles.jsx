import styled from "styled-components";

export const App = styled.div`
  min-height: 100vh;
`

export const AppBody = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #BF9F9F55, #BF9F9F );
  min-height: calc(100vh - 50px);
`