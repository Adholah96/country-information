import { useLocation, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

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
        <li>{locate.pathname === '/' ? 'Company Info' : 'Details'}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
