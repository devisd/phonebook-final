import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
          <NavLink to="/contacts">
            <h2>Contacts</h2>
          </NavLink>
          <NavLink to="/register">
            <h2>SignUp</h2>
          </NavLink>
          <NavLink to="/login">
            <h2>Login</h2>
          </NavLink>
        </nav>
      </header>

      <main>
        <hr />
        <br />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
