import BarraLogo from "../../components/BarraLogo";
import Button from "../../components/Button";
import CardPokemon from "../../components/CardPokemon";
import SearchField from "../../components/SearchField";
import { Container, WrapperNewCard, P, WrapperCard } from "./style";

const Home = () => {
  return (
    <Container>
      <BarraLogo />
      <SearchField />
      <WrapperNewCard>
        <P>Search result...</P>
        <Button>New Card</Button>
      </WrapperNewCard>
      <WrapperCard>
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
      </WrapperCard>
    </Container>
  );
};

export default Home;
