import styled from "styled-components";




export const CardContainer = styled.section`
  background: #fff;
  width: 200px;
  heigth: 400px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3)
}
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
  justify-content: space-around;
  margin-top: 10px;
`;

export const CardButton = styled.button`
  width: 50%;
  heigth: 19px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  background: #F9F0FC;

  &:hover {
    color: #f44336;
  }
`;
