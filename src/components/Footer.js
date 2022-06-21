import React from "react";

import { FaFacebook ,FaTwitter,FaLinkedin } from 'react-icons/fa';

import { FaTwitterSquare } from "react-icons/fa";

import logo from "../images/logo.svg";
import { Container } from "./styles/ContainerStyled";

import { FooterStyle } from "./styles/Footer.Styled";
import { Logo } from "./styles/Logo.styled";
import { SocialStyle } from "./styles/Social.Styled";



const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <Logo src={logo} alt="logo" />
        <div>
          <ul>
            <li>Phone: +-543-123-4567</li>
            <li>example@fylo.com</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>Press </li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <SocialStyle>
            <li><a href="facebook.com"><FaFacebook/></a></li>
            <li><a href="Twitter.com"><FaTwitter /></a></li>
            <li><a href="Linkedin.com"><FaLinkedin/></a></li>
          </SocialStyle>
        </div>
      </Container>
    </FooterStyle>
  );
};

export default Footer;
