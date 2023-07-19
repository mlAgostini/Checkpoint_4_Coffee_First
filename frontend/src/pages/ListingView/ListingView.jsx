import ButtonHome from "../../components/ButtonHome/ButtonHome";
import ButtonRandom from "../../components/ButtonRandom/ButtonRandom";

function ListingView() {
  return (
    <div>
      <h1>Je suis la page du tableau</h1>
      <ButtonRandom />
      <ButtonHome />
    </div>
  );
}

export default ListingView;
