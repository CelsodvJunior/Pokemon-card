import styled from "styled-components";
import IconCreat from "../../assets/icone_criar.svg"

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  height: 90%;
  background-color: #F6F4F6CC;
  box-shadow: 0 0 10px #D3D3D3
`;

const Card = styled.section`
  background: #FFFFFF;
  width: 50%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;

  border-bottom: 2px solid #D4D4D4
`

const Title = styled.h1`
  color: #5F1478;
  font-size: 2rem;
  font-weight: bold;
`

const InputContainer = styled.section`
  width: 100%;
  margin: 20px 0;
`

const Lable = styled.label`
  font-size: 1.125rem;
  color: #454545;
  font-weight: bold;
  padding-bottom: 5px;
  position: relative;
  display: block;
  margin-button: 20px;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #B9B9B9;
  opacity: 0.5;
  padding: 10px
`
const InputBtn = styled.button`
  width: 200px;
  height: 30px;
  background: #FFFFFF;
  color: #E76316;
  border: 1px solid #E76316;
  box-shadow: 0px 3px 6px #E763162E;
  border-radius: 4px;
  cursor: pointer;

`;

const BtnContainer = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Btn = styled.button`
  width: 140px;
  height: 35px;
  background: #E76316;
  color: #FFFFFF;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;





const NewCard = () => (
  <Container>
    <ContentWrapper>
      <Card>

        <TitleContainer >
          <img src={IconCreat} alt="img" />
          <Title >Creat Card</Title >
        </TitleContainer >

        <InputContainer>

          <Lable for='title'>
            Type a name to the card
          </Lable >
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Type the Title"
          />

        </InputContainer>
        <InputContainer>

          <Lable for='image'>
            Includ an image to appear on card
          </Lable>
          <Input
            type="text"
            name="image"
            id="image"
            placeholder="No files selected"
          />
          <InputBtn >Choose the file</InputBtn>

        </InputContainer>
        <BtnContainer>
          <Btn>Creat Card</Btn>
        </BtnContainer>

      </Card>
    </ContentWrapper>
  </Container>
);

export default NewCard;

