import styled from "styled-components";
import ImgBgsearch from "../../assets/fundo-busca.png";
import Lupa from "../../assets/lupa.svg";
import breakpoints from "../../utils/braekpoints";

export const Container = styled.section`
  background-image: url(${ImgBgsearch});
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 15vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 767px) {
    height: 25vh;
  }

  @media (min-width: 1023px) {
    height: 35vh;
  }

  @media (min-width: 1339px) {
    height: 45vh;
  }
`;

export const InputContainer = styled.div`
  width: 70%;
  height: 35%;

  @media (min-width: ${breakpoints.laptop}) {
    height: 25%;
  }
  @media (min-width: ${breakpoints.desktop}) {
    height: 25%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  position: relative;
  padding-left: 4%;
  border: none;
  border-radius: 4px;
  outline: none;

  ::placeholder {
    font-size: 0.3rem;
    color: #757575;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.85rem;
    border-radius: 6px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 1rem;
    border-radius: 8px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.5rem;
    border-radius: 10px;
  }
`;

export const Icon = styled.img``;
