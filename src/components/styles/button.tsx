import styled from "styled-components";

export const ButtonMenu = styled.button`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  padding: 9px 15px 9px 15px;
  background: ${({ theme }) => theme.colors.navyblue};
  box-shadow: 0px 20px 32px -4px rgba(0, 0, 0, 0.23);
  border-radius: 8px;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  border: none;
  margin-top: 0.25rem;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  span {
    margin-left: 1rem;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.darkviolet};
    background: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: none;
  } ;
`;

export const ButtonNavyBlue = styled.input`
  //square
  height: 6rem;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border: none;
  cursor: pointer;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.biggerBase};
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.navyblue};
  border-radius: 12px;
  &:disabled {
    opacity: 0.7;
  }
`;

export const ButtonNavyBlueRounded = styled.a`
  display: block;
  background: ${({ theme }) => theme.colors.navyblue};
  border-radius: 45px;
  padding: 1.3rem 2.8rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.label};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.white};
  transition: ease 0.3s;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    padding: 1.3rem 1.8rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.darkviolet};
    background: #${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.darkviolet};
  }
`;

export default ButtonMenu;
