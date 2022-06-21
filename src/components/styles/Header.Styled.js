import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 10px 10px;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  a {
    color: #ffffff;
  }

`;


export const NavStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  ul {
    li {
      display: inline-block;
      padding: 0 5px;
    }
  }
`;
