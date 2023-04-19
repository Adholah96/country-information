import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowToRight } from 'react-icons/bi';
import { eachCountry } from '../slice/nationslice';
import Nation from '../components/Nation';
import '../style/home.css';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(eachCountry());
  }, [dispatch]);

  const nations = useSelector((store) => store.nationReducer);
  console.log(nations.name);

  const [finder, setFinder] = useState('');

  const handleSearch = (e) => {
    setFinder(e.target.value);
  };
  // eslint-disable-next-line max-len
  const displayNations = nations.filter((nation) => nation.name.toLowerCase().includes(finder.toLowerCase()));
  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="search by country name"
          onChange={handleSearch}
        />
        <h2>Country shown by size of population</h2>
      </div>
      <div className="nation-holder">
        {displayNations.map((nation) => (
          <Link
            key={nation.id}
            className="details-tab"
            to={{
              pathname: `/nation/${nation.name}`,
              state: { stateParam: true },
            }}
          >
            <BiArrowToRight className="toDetails" />
            <Nation
              key={nation.id}
              id={nation.id}
              name={nation.name}
              population={nation.population}
              flag={nation.flag}
              area={nation.area}
              alphacode={nation.alphacode}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
