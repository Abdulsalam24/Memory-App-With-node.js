import React from "react";
import { Flex } from "./styles/Flex.Styled";
import { Button } from "./styles/Button.Styled";

import { Input } from "./styles/Input.Styled";
import { PreFooterStyle } from "./styles/PreFooter.styled";
import { Container } from "./styles/ContainerStyled";

const PreFooter = () => {
  return (
    <PreFooterStyle>
      <Container>
        <Flex layout='row'>
          <div>
            <h2>Get early access today</h2>
            <p>
              it only takes a aminute to sign up and our free starter tier is
              extremely generous. If you have any questions. our support team
              would be happy to help you.
            </p>
          </div>
          <Input layout='colunm'>
            <input type="text" placeholder="email@example.com" />
            <Button>Get Started For Free</Button>
          </Input>
        </Flex>
      </Container>
    </PreFooterStyle>
  );
};

export default PreFooter;
