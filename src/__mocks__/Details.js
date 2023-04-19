import React from 'react';

const Details = () => (
  <>
    <div className="details-container">
      <div className="heading">
        <img src="img" alt="flag" className="flag-image" />
        <h2>
          Country :
          <span>Kenya</span>
        </h2>
      </div>
      <div className="more-details">
        <p>
          <span>Population :</span>
          <span>28875</span>
        </p>
        <p>
          <span>Capital City :</span>
          <span>Nairobi</span>
        </p>
        <p>
          <span> Nation Size :</span>
          <span>500</span>
        </p>
        <p>
          <span> AlphaCode :</span>
          <span>KEN</span>
        </p>
        <p>
          <span> Region :</span>
          <span>Africa</span>
        </p>
        <p>
          <span> Calling Code :</span>
          <span>254</span>
        </p>
      </div>
    </div>
  </>
);

export default Details;
