import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <h2>Register</h2>
      </NavLink>
      <NavLink to="/login">
        <h2>Login</h2>
      </NavLink>
    </div>
  );
};

export default AuthNav;
