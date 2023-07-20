import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ButtonHome from "../../components/ButtonHome/ButtonHome";
import ButtonRandom from "../../components/ButtonRandom/ButtonRandom";
import ButtonRegenerate from "../../components/ButtonRegenerate/ButtonRegenerate";
import { ButtonContext } from "../../../contexts/ButtonContext";
import ListingCard from "../../components/ListingCard/ListingCard";
import "./listingView.scss";

function ListingView() {
  const { isButtonClicked } = useContext(ButtonContext);
  const location = useLocation();
  const data = location.state && location.state.data;

  const [machine, setMachine] = useState([]);

  useEffect(() => {
    // Récupérer les informations de la table machine depuis votre backend
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/machine`)
      .then((response) => {
        setMachine(response.data); // Mettre à jour l'état avec les informations récupérées
      })
      .catch((error) => {
        console.error("Error fetching machines:", error);
      });
  }, []);

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
    <div>
      <div className="card-container">
        <ListingCard data={firstHalf} machine={machine[0]} />

        <ListingCard data={secondHalf} machine={machine[1]} />
      </div>
      <div>
        {isButtonClicked ? <ButtonRegenerate /> : <ButtonRandom />}
        <ButtonHome />
      </div>
    </div>
  );
}

export default ListingView;
