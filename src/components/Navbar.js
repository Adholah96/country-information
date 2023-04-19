import { useLocation, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';
import '../style/navbar.css';

const Navbar = () => {
  const navigation = useNavigate();
  const locate = useLocation();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          {locate.pathname === '/' ? (
            ''
          ) : (
            <BiLeftArrowAlt onClick={() => navigation('/')} />
          )}
        </li>
        <li>{locate.pathname === '/' ? 'Nation Informations' : 'Details'}</li>
        <div className="icones">
          <FaMicrophone className="settings" />
          <FaRegSun className="microphone" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
