import { Link } from "react-router-dom";
import { BtnNewCard, HandleResult, ResultAndNewCardContainer } from "./styles";

const HandleSearchResuntlsAndNewCard = () => {
  return (
    <ResultAndNewCardContainer>
      <HandleResult>Result of search...</HandleResult>
      <Link to="/newcard">
        <BtnNewCard>New Card</BtnNewCard>
      </Link>
    </ResultAndNewCardContainer>
  );
};

export default HandleSearchResuntlsAndNewCard;
