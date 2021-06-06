import React from "react";
import styled from "styled-components";

export const HeaderViolet = styled.header`
  background-color: #7d4ce5;
  background-image: url("../images/bg-trop.png");
  background-repeat: no-repeat;
  background-size: 130%;
  display: flex;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    background-size: cover;
  }
`;
export const HeaderFilter = styled(HeaderViolet)`
  min-height: 47rem;
`;
export const HeaderAlternative = styled(HeaderViolet)`
  min-height: 47rem;
`;

export default HeaderViolet;
