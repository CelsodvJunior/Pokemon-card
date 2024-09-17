import styled from "styled-components";




export const CardContainer = styled.section`
  background: #fff;
  width: 200px;
  heigth: 400px;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const CardWrapper = styled.article`
  text-align: center;
`;

export const CardImg = styled.img`
  max-width: 100%;
  heigth: auto;
  transform-origin: center;
`;

export const CardBody = styled.section`
  margin-top: 10px;
`;

export const CardTextName = styled.h3`
`;

export const CardAction = styled.section`
  max-width: 100%;
  display: flex;
  justfy-content: space-around;
  margin-top: 10px;
`;

export const CardButton = styled.button`
  heigth:19px;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: #45a049;
  }

  &.catch-button {
    background-color: #f44336;

    &:hover {
      background-color: #e53935;
    }
  }
`;
