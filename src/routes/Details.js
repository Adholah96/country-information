import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../style/details.css';

function Details() {
  const params = useParams();
  const nations = useSelector((store) => store.nationReducer);
  const eachNation = nations.find(
    (nation) => nation.name === params.nationName
  );

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <div className="details-container">
        <div className="heading">
          <img
            src={eachNation.flag}
            alt={`${eachNation.name} - flag`}
            className="flag-image"
          />
          <h2>
            Country : <span>{eachNation.name}</span>
          </h2>
        </div>
        <div className="more-details">
          <p>
            <span>Population :</span>
            <span>{eachNation.population}</span>
          </p>
          <p>
            <span>Capital City :</span>
            <span>{eachNation.capital}</span>
          </p>
          <p>
            <span> Nation Size :</span>
            <span>{eachNation.area}</span>
          </p>
          <p>
            <span> AlphaCode :</span>
            <span>{eachNation.id}</span>
          </p>
          <p>
            <span> Region :</span>
            <span>{eachNation.region}</span>
          </p>
          <p>
            <span> Calling Code :</span>
            <span>{eachNation.callingcode}</span>
          </p>
          <p>
            <span> Time Zone :</span>
            <span>{eachNation.timezone}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;
