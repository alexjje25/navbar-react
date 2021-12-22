import React, { useState } from "react";
import styled from "styled-components";
import logo from './assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo >
      <img src={logo} alt="Logo" srcset="" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Our Work</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Careers</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};
export default Navbar;


const Nav = styled.div`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: white;
position: absolute;
top: 0;
left: 0;
right: 0;
`;

const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;
span {
  height: 4px;
  width: 27px;
  background: #000;
  margin-bottom: 4px;
  border-radius: 5px;
}
&:hover {
     
     transform: scale(1.2);
   }

@media (max-width: 768px) {
  display: flex;
}
`;


  const MenuLink = styled.a`
  
   padding: 1rem 2rem;
   cursor: pointer;
   text-align:center;
   text-decoration: none;
   color: #000;
   transition: transform 0.3s ease-in-out;
   font-size: 0.9rem;

   &:hover {
     color: #000;
     transform: scale(1.2);
   }
  `;

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
@media (max-width: 768px) {
  overflow: hidden;
  flex-direction: column;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  transition: max-height 0.3s ease-in;
  width: 100%;
}
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #000;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem; 
  background-image: url(${logo});
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  img {
  width: 30px;

  }
`;
  
 