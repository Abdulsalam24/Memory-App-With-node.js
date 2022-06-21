

import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  line-height: 1.5;
  padding: 1.3rem;
  margin-top: 3rem;
  max-width: 300px;
  margin:2rem auto 0;

  @media (min-width: ${({ theme }) => theme.media}) {
  margin:2rem 0;
  max-width: 350px;

  }
`;
