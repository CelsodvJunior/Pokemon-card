import BarraLogo from "../../components/BarraLogo";
import Button from "../../components/Button";
import SearchField from "../../components/SearchField";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <BarraLogo />
      <SearchField />
      <Button>New Card</Button>
    </Container>
  );
};

export default Home;
