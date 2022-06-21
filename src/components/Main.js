import React from "react";
import { MainStyle } from "./styles/Main.Styled";

import bgTop from "../images/bg-top-mobile.svg";

import mainImg from "../images/illustration-2.svg";

import { Flex } from "./styles/Flex.Styled";

import { Card } from "./styles/Card.styled";
import { Profile } from "./styles/Profile.styled";
import { Container } from "./styles/ContainerStyled";

import avatar from "../images/avatar-testimonial.jpg";

const Main = () => {
  return (
    <MainStyle>
      <img src={bgTop} alt="bgTop" />
      <Container>
        <Flex layout='row-reverse'>
          <img src={mainImg} alt="header Imgage" />
          <div>
            <h2>Stay productive, wherever you are</h2>
            <p>
              Never let locaation be an issue when accessing your files. Fylo
              has you covered for all of your file storage needs
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <a href="">See how Fylo works </a>
            <Card>
              <p>
              "" <br />
              Fylo has improed our team productivity by an order of magnitude.
              Sine making the switch our team has become a awell-oiled
              collaboration machine.
              </p>
              
              <Profile>
                <img src={avatar} alt="avatar" />
                <div>
                  <span>Kyle Burton</span>
                  <span>Founder & CEO, Huddle</span>
                </div>
              </Profile>
            </Card>
          </div>
        </Flex>
      </Container>
    </MainStyle>
  );
};

export default Main;
