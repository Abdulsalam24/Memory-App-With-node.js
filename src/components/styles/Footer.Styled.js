import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.color.secoundary};
  padding: 3rem 0;
  color: white;
  > div {
    > div {
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      flex-wrap: wrap;
      > ul {
        width: 40%;
        /* flex: 1; */
        li {
          margin: 10px 0;
        }
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.media}) {
    > div {
      > div {
        > ul {
          width: 1000%;
          flex: 1;
        }
      }
    }
  }
`;
