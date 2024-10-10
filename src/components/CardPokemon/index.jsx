import {
  Button,
  Container,
  Img,
  WarraperButton,
  TextCard,
  WrapperText,
} from "./style";

import ImgTeste from "../../assets/pokemonTeste.png";
import Trash from "../../assets/Icon-trash.svg";
import Edit from "../../assets/Icon-edit.svg";

const CardPokemon = () => {
  return (
    <Container>
      <Img src={ImgTeste} alt="Pokemon Img" />
      <WrapperText>
        <TextCard>Name of pokemon</TextCard>
      </WrapperText>
      <WarraperButton>
        <Button>
          <img src={Trash} alt="Icon trash" />
          Edit
        </Button>
        <Button>
          {" "}
          <img src={Edit} alt="Icon Edit" />
          Trash
        </Button>
      </WarraperButton>
    </Container>
  );
};

export default CardPokemon;
