import styled from "styled-components";

export const Logo = styled.img`
  width: 100px;
  @media (min-width: ${({ theme }) => theme.media}) {
    width: 150px;
  }
`;
