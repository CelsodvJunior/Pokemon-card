import styled from "styled-components";

export const StyleButton = styled.button`
  background: #e76316;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  width: 100px;
  height: 30px;
  color: #ffffff;
  font-famyl: ${({ theme }) => theme.fonts};
`;
