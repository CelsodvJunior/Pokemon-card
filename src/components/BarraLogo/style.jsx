import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.color.gradient};
  width: 100%;
  height: 50%;
`;

export const LogImg = styled.img`
  background: transparent;
  height: 37px;
  margin-left: 10px;
  padding: 5px;
`;
