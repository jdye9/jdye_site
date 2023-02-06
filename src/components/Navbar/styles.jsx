import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 50px;
  box-shadow: 0px 5px 6px -2px rgba(0,0,0,.2);
  z-index: 999;
  position: sticky;
  top: 0;
`
export const NavbarLogo = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1.5rem;
  margin-right: auto;
  font-family: 'Bangers';
  font-size: xx-large;
  color: #BF9F9F;
  transition: transform 250ms;
  :hover {
    transform: translateY(-2px);
    cursor: pointer;
  }
`
