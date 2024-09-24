import styled from "styled-components";

export const TopoContainer = styled.section`
  width: 100%;
  height: 40px;
  background: linear-gradient(to right, #5f1478, #ae276f);
  
  @media (max-width: 768px) {
    height: 60px;
  }
  @media (max-width: 480px) {
      height: 50px;
  }
  
  
`;


export const LogImg = styled.img`
  background: transparent;
  height: 37px;
  padding-left: 30px;
  padding: 5px;


  @media (max-width: 768px) {
   height: 80%;
  }

  @media (max-width: 490px) {
   height: 70%;
  }
`;


