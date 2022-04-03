import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAction } from '../redux/actions/userActions';
import './css/Login.css';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    const { history: { push } } = props;
    dispatch(emailAction(email));
    push('/carteira');
  };

  const btnVerification = () => {
    const regexEmail = /\D{1,}@\D{1,}\.com/;
    const magicNumber = 6;
    if (regexEmail.test(email) && password.length >= magicNumber) {
      return false;
    }
    return true;
  };

  return (
    <div className="container-centralized background-color-prymary">
      <div className="Login">
        <div className="Login__login text-color-tertiary font-size-xx">Login</div>
        <label htmlFor="login--email">
          <input
            className="text-alin-center"
            data-testid="email-input"
            placeholder="E-mail"
            type="email"
            id="login--email"
            name="email"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="login--password">
          <input
            className="text-alin-center"
            data-testid="password-input"
            placeholder="Password"
            type="password"
            id="login--password"
            name="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <button
          className="Login__button"
          type="button"
          disabled={ btnVerification() }
          onClick={ handleBtnClick }
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
