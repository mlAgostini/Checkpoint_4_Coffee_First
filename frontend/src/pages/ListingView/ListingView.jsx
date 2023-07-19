import { useContext } from "react";
import ButtonHome from "../../components/ButtonHome/ButtonHome";
import ButtonRandom from "../../components/ButtonRandom/ButtonRandom";
import ButtonRegenerate from "../../components/ButtonRegenerate/ButtonRegenerate";
import { ButtonContext } from "../../../contexts/ButtonContext";
import ListingCard from "../../components/ListingCard/ListingCard";

function ListingView() {
  const { isButtonClicked } = useContext(ButtonContext);

  return (
    <div className="card-container">
      <h1>Je suis la page du tableau</h1>
      <ListingCard />
      <ListingCard />
      {isButtonClicked ? <ButtonRegenerate /> : <ButtonRandom />}
      <ButtonHome />
    </div>
  );
}

export default ListingView;
