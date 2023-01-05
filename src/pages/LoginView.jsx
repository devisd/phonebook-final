import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import AuthOperation from 'redux/auth/auth-operations';
import { login } from 'redux/auth/auth-operations';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      email,
      password,
    });

    dispatch(login({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <label>
          e-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">SignIn</button>
      </form>
    </>
  );
};

export default LoginView;
