import styled from "styled-components";

export const Container = styled.section`
  width: 200px;
  height: 300px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  flex
`;

export const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

export const WrapperText = styled.div`
  width: 100%;
  text-align: center;
  flex-grow: 1;
`;

export const TextCard = styled.h3`
  color: ${({ theme }) => theme.color.textCard};
`;

export const WarraperButton = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;
`;
