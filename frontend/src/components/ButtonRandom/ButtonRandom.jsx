import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ButtonContext } from "../../../contexts/ButtonContext";
import "./buttonRandom.scss";

function ButtonRandom() {
  const { toggleButton, isButtonClicked } = useContext(ButtonContext);
  const [isRandomized, setIsRandomized] = useState(false);

  const navigate = useNavigate();

  const handleRandomizeAndNavigate = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/member`).then((response) => {
      const { data } = response;

      toggleButton();
      setIsRandomized(true);
      navigate("/listing", { state: { data } });
    });
  };

  return (
    <div className="buttonRandom-container">
      <button
        type="button"
        className="buttonRandom"
        onClick={handleRandomizeAndNavigate}
      >
        {isButtonClicked ? (
          <div>{isRandomized ? "Rerandomize" : "Randomize"}</div>
        ) : (
          <div>
            <p>Let the Coffee Games begin !</p>
            <p>(And may the odds of my randomizer always be in your favor)</p>
          </div>
        )}
      </button>
    </div>
  );
}

export default ButtonRandom;
