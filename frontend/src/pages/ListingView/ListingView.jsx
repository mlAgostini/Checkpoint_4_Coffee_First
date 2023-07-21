import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ButtonHome from "../../components/ButtonHome/ButtonHome";
import ButtonRandom from "../../components/ButtonRandom/ButtonRandom";
import ListingCard from "../../components/ListingCard/ListingCard";
import "./listingView.scss";

function ListingView() {
  const location = useLocation();
  const data = location.state && location.state.data;

  const [machineDataFetched, setMachineDataFetched] = useState(false);
  const [machine, setMachine] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/machine`)
      .then((response) => {
        setMachine(response.data);
        setMachineDataFetched(true); // Indiquer que les données de machine ont été récupérées
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

  const firstHalfWithMachineId = firstHalf.map((item) => ({
    ...item,
    machine_id: machine[0]?.id, // Mettre à jour machine_id avec l'id de la première machine
  }));

  const secondHalfWithMachineId = secondHalf.map((item) => ({
    ...item,
    machine_id: machine[1]?.id, // Mettre à jour machine_id avec l'id de la deuxième machine
  }));

  const updateUserMachineId = (userId, machineId) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/members/${userId}`, {
        machine_id: machineId,
      })
      // .then((response) => {
      //   console.log("User updated successfully:", response.data);
      // })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div>
      <div className="card-container">
        {machineDataFetched && machine.length >= 2 ? (
          <>
            <ListingCard
              data={firstHalfWithMachineId}
              machine={machine[0]}
              onUpdateUserMachineId={updateUserMachineId}
            />
            <ListingCard
              data={secondHalfWithMachineId}
              machine={machine[1]}
              onUpdateUserMachineId={updateUserMachineId}
            />
          </>
        ) : (
          <p>Loading ... </p>
        )}
      </div>
      <div className="btn-generate">
        <div className="btn-one">
          <ButtonRandom />
        </div>
        <div className="btn-two">
          <ButtonHome />
        </div>
      </div>
    </div>
  );
}

export default ListingView;
