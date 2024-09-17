import { LogImg, TopoContainer } from "./styles"

import TestLogo from "../../assets/logTeste.png"

const TopBar = () => {
  return (
    <TopoContainer>
      <LogImg src={TestLogo} />
    </TopoContainer>
  )
}

export default TopBar
