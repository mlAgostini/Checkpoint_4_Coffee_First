import PropTypes from "prop-types";
import "./listingCard.scss";

function ListingCard({ data, machine }) {
  return (
    <div className="cardContent">
      <h2>{machine.machine_name}</h2>

      <div className="member-container">
        {data.map((member) => (
          <div className="member-name" key={member.id}>
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
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
  machine: PropTypes.shape({
    id: PropTypes.number.isRequired,
    machine_name: PropTypes.string.isRequired,
  }).isRequired,
};
