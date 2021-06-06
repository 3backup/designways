import styled from "styled-components";
import BackgroundNewsletter from "../../images/newsletter=bg-image.svg";

export const Container = styled.div`
  max-width: 98rem;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 0px ${({ theme }) => theme.space.xs};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 ${({ theme }) => theme.space.xxs};
  }
`;

export const ContainerBig = styled(Container)`
  max-width: 119rem;
  width: 119rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    max-width: 92%;
    width: 92%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    max-width: 96%;
    width: 96%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 96%;
    width: 96%;
  }
`;
export const ContainerXl = styled(Container)`
  max-width: 128rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    max-width: 92%;
    width: 92%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    max-width: 96%;
    width: 96%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 96%;
    width: 96%;
  }
`;
export const CotainerFullWidth = styled.section`
  width: 100%;
  padding: 8rem 4%;
  background-color: ${({ theme }) => theme.colors.violet};
  background-image: url("${BackgroundNewsletter}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    background-size: cover;
    background-position: center;
  }
`;
export default Container;
