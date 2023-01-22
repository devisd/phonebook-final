import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

const UserBar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(AuthSelectors.getUser);

  return (
    <div>
      <h2>Welcome, {name}</h2>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Exit
      </button>
    </div>
  );
};

export default UserBar;
