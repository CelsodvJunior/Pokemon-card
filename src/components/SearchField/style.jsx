import styled from "styled-components";
import ImgBgsearch from "../../assets/fundo-busca.png";
import Lupa from "../../assets/lupa.svg";

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
  height: 20%;
  border-radius: 10px;
  border: none;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  position: relative;
  padding-left: 4%;
  font-size: 0.5rem;
  color: #757575;

  &:focus::placeholder {
    opacity: 0;
  }
`;

export const Icon = styled.img``;
