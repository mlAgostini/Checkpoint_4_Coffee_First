import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { ButtonContext } from "../../../contexts/ButtonContext";
import "./buttonRandom.scss";

function ButtonRandom() {
  const { toggleButton } = useContext(ButtonContext);

  const navigate = useNavigate();

  const handleRandomizeAndNavigate = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/member`).then((response) => {
      const { data } = response;

      toggleButton();

      navigate("/listing", { state: { data, isRandomized: true } });
    });
  };

  return (
    <div className="buttonRandom-container">
      <button
        type="button"
        className="buttonRandom"
        onClick={handleRandomizeAndNavigate}
      >
        <div>
          <p>Let the Coffee Games begin !</p>
          <p>(And may the odds of my randomizer always be in your favor)</p>
        </div>
      </button>
    </div>
  );
}

export default ButtonRandom;
