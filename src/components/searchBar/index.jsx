import PropTypes from "prop-types";
import LupaIcon from "../../assets/lupa.svg"


import { SearchBackgoundImg, SearchIcon, SearchInput, SearchInputContainer } from './style'



const SearchBar = ({PokemonFilter}) => {
  const handleInputChange = (event) => {
    PokemonFilter(event.target.value)
  };



  return (
    <SearchBackgoundImg>
      <SearchInputContainer>
        <SearchInput 
        type='text' 
        placeholder='Enter your search here...' 
        onChange={handleInputChange}
        />

        <SearchIcon 
        src={LupaIcon} 
        alt="LupaIcon" 
        />

      </SearchInputContainer>
    </SearchBackgoundImg>
  );
};

SearchBar.propTypes = {
  PokemonFilter: PropTypes.func.isRequired,
};

export default SearchBar
