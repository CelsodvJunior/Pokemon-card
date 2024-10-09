import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.color.gradient};
  width: 100%;
  height: 8vh;
  border: 1px, #00000029;
  display: flex;
  align-items: center;

  @media (min-width: 767px) {
    height: 10vh;
  }

  @media (min-width: 1023px) {
    height: 8vh;
  }
`;

export const LogImg = styled.img`
  background: transparent;
  height: 37px;
  margin-left: 3%;
  padding: 5px;

  @media (min-width: 1339px) {
    height: 5vh;
  }
  @media (min-width: 1023px) {
    height: 5vh;
  }
`;
