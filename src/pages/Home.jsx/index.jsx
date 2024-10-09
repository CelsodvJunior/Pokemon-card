import BarraLogo from "../../components/BarraLogo";
import SearchField from "../../components/SearchField";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <BarraLogo />
      <SearchField />
    </Container>
  );
};

export default Home;
