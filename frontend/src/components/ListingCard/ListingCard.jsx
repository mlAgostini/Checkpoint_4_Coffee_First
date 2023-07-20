import PropTypes from "prop-types";

function ListingCard({ data }) {
  return (
    <div>
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
};
