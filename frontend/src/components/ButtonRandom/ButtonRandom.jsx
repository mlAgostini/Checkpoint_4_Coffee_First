import { useNavigate } from "react-router-dom";

function ButtonRandom() {
  const navigate = useNavigate();

  const handleClick = () => {
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
