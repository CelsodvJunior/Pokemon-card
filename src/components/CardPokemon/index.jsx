import {
  Button,
  Container,
  Img,
  WarraperButton,
  TextCard,
  WrapperText,
} from "./style";

import Trash from "../../assets/Icon-trash.svg";
import Edit from "../../assets/Icon-edit.svg";

import PropTypes from "prop-types";

const CardPokemon = ({ pokemon }) => {
  const handleClick = () => {
    alert("WE CAN`T DO THIS");
  };

  return (
    <Container>
      <Img src={pokemon.image} alt={pokemon.name} />
      <WrapperText>
        <TextCard>{pokemon.name}</TextCard>
      </WrapperText>
      <WarraperButton>
        <Button onClick={handleClick}>
          <img src={Trash} alt="Icon trash" />
          Edit
        </Button>
        <Button onClick={handleClick}>
          {" "}
          <img src={Edit} alt="Icon Edit" />
          Trash
        </Button>
      </WarraperButton>
    </Container>
  );
};

CardPokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPokemon;
