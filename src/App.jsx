import { ThemeProvider } from "styled-components";
import BarraLogo from "./components/BarraLogo";

import theme from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BarraLogo />
    </ThemeProvider>
  );
};

export default App;
