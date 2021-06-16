import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: none;
  }
`;
export const NavigationList = styled.ul`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.biggerBase};
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.lightpurple};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    justify-content: flex-start;
  }
`;
export const NavigationElement = styled.li`
  display: flex;
  align-items: center;
  margin: 0 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-basis: 100%;
  }
  img {
  }
`;

export default Navigation;
