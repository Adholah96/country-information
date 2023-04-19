import React from 'react';

const Navbar = () => (
  <nav>
    <ul className="nav-ul">
      <li>pathname === &apos;/&apos; ? &apos; &apos; : &apos;details&apos;</li>
      <li>
        pathname === &apos;/&apos; ? &apos;Nation Information&apos; :
        &apos;Details&apos;
      </li>
    </ul>
  </nav>
);

export default Navbar;
