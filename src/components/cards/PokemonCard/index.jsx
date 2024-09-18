import {
  CardContainer,
  CardWrapper,
  CardImg,
  CardBody,
  CardTextName,
  CardAction,
  CardButton

} from "./style";


import TrashIcon from "../../../assets/Icon-trash.svg"
import EditIcon from "../../../assets/Icon-edit.svg"





const PokemonCard = ({ pokemon }) => {
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <CardImg src={pokemon.image} alt={pokemon.name} />
          <CardBody>
            <CardTextName>
              {pokemon.name}
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
