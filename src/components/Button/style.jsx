import styled from "styled-components";

export const StyleButton = styled.button`
  background: #e76316;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  border: none;
  width: 100px;
  height: 30px;
  color: #ffffff;
  font-famyl: ${({ theme }) => theme.fonts};
  font-size: 0.75rem;
  cursor: pointer;

  @media (min-width: 767px) {
    width: 150px;
    height: 40px;
    font-size: 1rem;
  }
  @media (min-width: 1023px) {
    width: 200px;
    height: 50px;
    font-size: 1.5rem;
  }
  @media (min-width: 1439px) {
    width: 250px;
    height: 60px;
    font-size: 2rem;
  }
`;
