import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  @media (min-width: ${({ theme }) => theme.media}) {
    flex-direction: ${({layout}) => layout};
    > *{
        flex: 1;
    }
  }
`;
