import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthSelectors from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

const UserBar = () => {
  const dispatch = useDispatch();
  const name = useSelector(AuthSelectors.getUserName);

  return (
    <div>
      <h2>Welcome, {name}</h2>
      <button type="button" onClick={() => dispatch(logout())}>
        Exit
      </button>
    </div>
  );
};

export default UserBar;
