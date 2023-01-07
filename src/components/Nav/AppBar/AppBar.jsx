import React from 'react';
import { useSelector } from 'react-redux';
import AuthSelectors from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';

import AuthNav from 'components/Nav/AuthNav';
import MainNav from 'components/Nav/MainNav';
import UserBar from 'components/Nav/UserBar';

const AppBar = () => {
  const isLoggedIn = useSelector(AuthSelectors.getIsLoggedIn);
  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <MainNav />
        {isLoggedIn ? <UserBar /> : <AuthNav />}
      </header>

      <main>
        <hr />
        <br />
        <Outlet />
      </main>
    </>
  );
};

export default AppBar;
