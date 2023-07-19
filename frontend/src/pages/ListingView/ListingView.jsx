import { useContext } from "react";
import ButtonHome from "../../components/ButtonHome/ButtonHome";
import ButtonRandom from "../../components/ButtonRandom/ButtonRandom";
import ButtonRegenerate from "../../components/ButtonRegenerate/ButtonRegenerate";
import { ButtonContext } from "../../../contexts/ButtonContext";

function ListingView() {
  const { isButtonClicked } = useContext(ButtonContext);

  return (
    <div>
      <h1>Je suis la page du tableau</h1>
      {isButtonClicked ? <ButtonRegenerate /> : <ButtonRandom />}

      <ButtonHome />
    </div>
  );
}

export default ListingView;
