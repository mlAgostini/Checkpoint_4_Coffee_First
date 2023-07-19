import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ButtonContext } from "../../../contexts/ButtonContext";

function ButtonRandom() {
  const { toggleButton } = useContext(ButtonContext);

  const navigate = useNavigate();

  const handleClick = () => {
    toggleButton();
    navigate("/listing");
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        <p>Let the Coffee Games begin !</p>
        <p>(And may the odds of my randomizer always be in your favor)</p>
      </button>
    </div>
  );
}

export default ButtonRandom;
