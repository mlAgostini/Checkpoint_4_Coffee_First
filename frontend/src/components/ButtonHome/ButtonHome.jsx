import { useNavigate } from "react-router-dom";

function ButtonHome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click to go back to home
      </button>
    </div>
  );
}

export default ButtonHome;
