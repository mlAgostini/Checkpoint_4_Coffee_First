import { useContext, useEffect } from "react";
import ButtonRandom from "../../components/ButtonRandom/ButtonRandom";
import { ButtonContext } from "../../../contexts/ButtonContext";
import "./home.scss";

export default function Home() {
  const { setIsButtonClicked } = useContext(ButtonContext);

  useEffect(() => {
    setIsButtonClicked(false);
  }, []);

  return (
    <div className="home-container">
      <h1>Tired of fighting for the coffee machine ?</h1>

      <h2>
        Try our order generator, specially designed for Wild Code School !
      </h2>
      <ButtonRandom />
    </div>
  );
}
