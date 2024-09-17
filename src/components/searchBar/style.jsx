import styled from "styled-components";

import BachgroundSearch from "../../assets/fundo-busca.png"

export const SearchBackgoundImg = styled.section`
  background: url(${BachgroundSearch});
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: 70%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 40px;
  padding: 10px;
  font-size: 1em;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor:pointer;
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;
