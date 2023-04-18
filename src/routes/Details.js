import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Details() {
  const params = useParams();
  const nations = useSelector((store) => store.nationReducer);
  console.log(nations);
  const eachNation = nations.find(
    (nation) => nation.name === params.nationName,
  );
  console.log(eachNation);

  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <div className="heading">
        <img
          src={eachNation.flag}
          alt={`${eachNation.name} - flag`}
          className="flag-image"
        />
        <h2>
          Country :
          {' '}
          <span>{eachNation.name}</span>
        </h2>
      </div>
      <div className="more-details">
        <p>
          Population :
          <span>{eachNation.population}</span>
        </p>
        <p>
          Capital City :
          <span>{eachNation.capital}</span>
        </p>
        <p>
          Nation Size :
          <span>{eachNation.area}</span>
        </p>
        <p>
          AlphaCode :
          <span>{eachNation.alphaCode}</span>
        </p>
      </div>
    </>
  );
}

export default Details;
