import React from "react";
import { StyledHeader, NavStyle } from "./styles/Header.Styled";



import headerImg from "../images/illustration-1.svg";

import { Logo } from "./styles/Logo.styled";
import logo from "../images/logo.svg";
import { Flex } from "./styles/Flex.Styled";
import { Button } from "./styles/Button.Styled";
import { Input } from "./styles/Input.Styled";
import { Container } from "./styles/ContainerStyled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavStyle>
          <Logo src={logo} alt="logo" />
          <ul>
            <li>Features</li>
            <li>Team</li>
            <li>Sign up</li>
          </ul>
        </NavStyle>
        <Flex layout='row-reverse'>  
          <img src={headerImg} alt="header Imgage" />
          <div>
            <h1>All your files in one secure location accessible anywhere</h1>
            <p>
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <Input layout='row'>
              <input type="text" placeholder="Enter youe email" />
              <Button>
                Get Started
              </Button>
            </Input>
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  );
};


export default Header;
