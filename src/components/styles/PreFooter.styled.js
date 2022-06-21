import styled from "styled-components";

export const PreFooterStyle = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: #ffffff;
  padding: 2rem 0 4rem;

  @media (min-width: ${({ theme }) => theme.media}) {
    
    button {
      margin: 0;
      width: 50%;
    }
  }
`;
