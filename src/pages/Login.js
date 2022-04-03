import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAction } from '../redux/actions/userActions';

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
    <div>
      <div>Login</div>
      <label htmlFor="login--email">
        <input
          data-testid="email-input"
          type="email"
          id="login--email"
          name="email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </label>
      <label htmlFor="login--password">
        <input
          data-testid="password-input"
          type="password"
          id="login--password"
          name="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
      </label>
      <button
        type="button"
        disabled={ btnVerification() }
        onClick={ handleBtnClick }
      >
        Entrar
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
