import { useRef } from "react";
import { Container, Icon, Input, InputContainer } from "./style";
// import Lupa from "../../assets/lupa.svg";

//  TODO refactore the icon search
const SearchField = () => {
  const inputRef = useRef(null);

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          ref={inputRef}
          placeholder="Type your search..."
          onMouseEnter={() => {
            inputRef.current.focus();
          }}
        />
      </InputContainer>
    </Container>
  );
};

export default SearchField;
