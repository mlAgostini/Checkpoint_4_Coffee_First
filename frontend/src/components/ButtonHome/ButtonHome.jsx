import { useNavigate } from "react-router-dom";
import "./buttonHome.scss";

function ButtonHome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="homeButton" type="button" onClick={handleClick}>
        Click to go back to home
      </button>
    </div>
  );
}

export default ButtonHome;
