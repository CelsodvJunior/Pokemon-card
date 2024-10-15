import styled from "styled-components";
import breakpoints from "../../utils/braekpoints";

export const Container = styled.section`
  background: #fff;
  padding: 10px;
  margin: 5%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
    position: absolute;
    top: 0;
    right: 0; /
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
`;
export const Img = styled.img`
  width: 30px;
`;
export const H1 = styled.h1`
  font-size: 1rem;
  color: #5f1478;
  padding: 5%;
  padding-right: 40%;

  @media (min-width: ${breakpoints.tablet}) {
    padding-right: 45%;
    font-size: 1.5rem;
  }
`;

export const P = styled.p`
  font-size: 0.75rem;
  padding-bottom: 10px;
  color: #454545;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.85rem;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  color: #757575;
  border-radius: 5px;
  border-color: #b9b9b9;

  &:focus {
    outline: none;
    border-color: #5f1478;
  }

  @media (min-width: ${breakpoints.tablet}) {
    height: 50px;
    font-size: 1rem;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid #d4d4d4;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
