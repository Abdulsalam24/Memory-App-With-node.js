import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 4rem;

  > div,
  img {
    text-align: center;
  }

  img {
    width: 350px;
  }

  @media (min-width: ${({ theme }) => theme.media}) {
    flex-direction: row;
    flex-direction: ${({layout}) => layout};
    > * {
      flex:  1;
    }
    > div {
      text-align: left;
    }
  }
`;
