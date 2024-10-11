import styled from "styled-components";
import breakpoints from "../../utils/braekpoints";

export const Container = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperNewCard = styled.div`
  width: 100%
  height: 100px;
  margin-top: 4%;

  display: flex;
  align-items: center;
  justify-content: space-around;


  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
    justify-content: space-between;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 70%;
    justify-content: space-between;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  color: #5f1478;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 2rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 3rem;
  }
`;

export const WrapperCard = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  justify-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 75%;
    grid-template-columns: repeat(4,1fr);
  }
  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 40px;
`;
