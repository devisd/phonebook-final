import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav>
      <NavLink to="/">
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/contacts">
        <h2>Contacts</h2>
      </NavLink>
    </nav>
  );
};

export default MainNav;
