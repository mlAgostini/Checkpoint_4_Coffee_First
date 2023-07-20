import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { ButtonContext } from "../../../contexts/ButtonContext";

function ButtonRandom() {
  const { toggleButton } = useContext(ButtonContext);

  const navigate = useNavigate();

  const handleRandomizeAndNavigate = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/member`).then((response) => {
      const { data } = response;
      toggleButton();
      navigate("/listing", { state: { data } });
    });
  };

  return (
    <div>
      <button type="button" onClick={handleRandomizeAndNavigate}>
        <p>Let the Coffee Games begin !</p>
        <p>(And may the odds of my randomizer always be in your favor)</p>
      </button>
    </div>
  );
}

export default ButtonRandom;
