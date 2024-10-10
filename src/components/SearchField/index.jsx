import { useRef } from "react";
import { Container, Icon, Input, InputContainer } from "./style";
// import Lupa from "../../assets/lupa.svg";

//  TODO refactore the icon search
const SearchField = ({ PokemonFilter }) => {
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    PokemonFilter(event.target.value);
  };

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
          onChange={handleInputChange}
        />
      </InputContainer>
    </Container>
  );
};

export default SearchField;
