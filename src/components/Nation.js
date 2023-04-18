import PropTypes from 'prop-types';

const Nation = ({
  name, id, population, flag,
}) => (
  <>
    <div className="detail-container" id={id}>
      <div className="flag-bearer">
        <img src={flag} alt="nation flags" />
      </div>
      <div className="description">
        <p className="nation-name">{name}</p>
        <p className="population">{population}</p>
      </div>
    </div>
  </>
);
Nation.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default Nation;
