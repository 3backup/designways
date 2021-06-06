import styled from "styled-components";

export const LinkSingle = styled.a`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 140%;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.darkgrey};
`;
export const LinkMenu = styled.a`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.biggerBase};
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.lightviolet};
  }
`;

export default LinkSingle;
