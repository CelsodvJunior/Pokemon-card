import Logo from "../../assets/logo-teste.png";
import { Container, LogImg } from "./style";

const BarraLogo = () => {
  return (
    <Container>
      <LogImg src={Logo} alt="Logo of project" />
    </Container>
  );
};
export default BarraLogo;
