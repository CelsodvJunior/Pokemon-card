import LupaIcon from "../../assets/lupa.svg"


import { SearchBackgoundImg, SearchIcon, SearchInput, SearchInputContainer } from './style'



const SearchBar = () => {
  return (
    <SearchBackgoundImg>
      <SearchInputContainer>
        <SearchInput type='text' placeholder='Enter your search here...' />
        <SearchIcon src={LupaIcon} alt="LupaIcon" />
      </SearchInputContainer>
    </SearchBackgoundImg>
  )
}

export default SearchBar
