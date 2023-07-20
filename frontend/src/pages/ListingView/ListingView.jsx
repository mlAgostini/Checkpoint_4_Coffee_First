import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ButtonHome from "../../components/ButtonHome/ButtonHome";
import ButtonRandom from "../../components/ButtonRandom/ButtonRandom";
import ButtonRegenerate from "../../components/ButtonRegenerate/ButtonRegenerate";
import { ButtonContext } from "../../../contexts/ButtonContext";
import ListingCard from "../../components/ListingCard/ListingCard";

function ListingView() {
  const { isButtonClicked } = useContext(ButtonContext);
  const location = useLocation();
  const data = location.state && location.state.data;

  // Algorythme de Fischer-Yates
  function shuffleArray(array) {
    // Créer une copie du tableau avant de le modifier
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  // Randomiser le tableau
  const randomizedData = shuffleArray([...data]);

  // Séparer le tableau en deux
  const halfLength = Math.ceil(randomizedData.length / 2);
  const firstHalf = randomizedData.slice(0, halfLength);
  const secondHalf = randomizedData.slice(halfLength);

  return (
    <div className="card-container">
      <h1>Je suis la page du tableau</h1>
      {data ? <ListingCard data={firstHalf} /> : <p>Loading ... </p>}
      {data ? <ListingCard data={secondHalf} /> : <p>Loading ... </p>}
      {isButtonClicked ? <ButtonRegenerate /> : <ButtonRandom />}
      <ButtonHome />
    </div>
  );
}

export default ListingView;
