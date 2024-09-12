import {
  CardContainer,
  CardWrapper,
  CardImg,
  CardBody,
  CardTextName,
  CardAction,
  CardButton

} from "./PokemonCard-style";


import TestePokmon from "../../assets/teste-pokemon.png"
import TrashIcon from "../../assets/Icon-trash.svg"
import EditIcon from "../../assets/Icon-edit.svg"





const PokemonCard = () => {
  const name = "Snoopy "
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <CardImg src={TestePokmon} />
          <CardBody>
            <CardTextName>
              {name}
            </CardTextName>
            <CardAction>
              <CardButton><img src={TrashIcon} alt="trashicon" />Delete</CardButton>
              <CardButton><img src={EditIcon} alt="iconEdit" />Edit</CardButton>
            </CardAction>
          </CardBody>
        </CardWrapper>
      </CardContainer>
    </>
  )
}

export default PokemonCard;
