import PropTypes from "prop-types";
import "./listingCard.scss";

function ListingCard({ data, label }) {
  return (
    <div className="cardContent">
      <h2> {label} </h2>
      {data.map((member) => (
        <div key={member.id}>
          <h3>{member.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ListingCard;

ListingCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      machine_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
};
