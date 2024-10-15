import { Container, Footer, H1, Header, Img, Input, P } from "./style";
import NewCardIcon from "../../assets/criar_card.svg";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import IconHome from "../../assets/icon_home.png";

const NewCard = () => {
  return (
    <Container>
      <Header>
        <Img src={NewCardIcon} alt="New CardI con" />
        <H1>Creat Card</H1>
        <Link to="/">
          <Img src={IconHome} alt="IconHome" />
        </Link>
      </Header>
      <div>
        <P>TYPE ONE NAME THE THE POKEMON-CARD</P>
        <Input placeholder="Type the Title" />
      </div>
      <div>
        <P>INCLUDE ONE DESCRIPTION</P>
        <Input placeholder="Type a description" />
      </div>
      <Footer>
        <Button>New Card</Button>
      </Footer>
    </Container>
  );
};

export default NewCard;
