import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './pages/Login';
import NotLogged from './pages/NotLogged';
import Wallet from './pages/Wallet';
import './App.css';

function App(prop) {
  const login = useSelector((state) => state.user.login);
  const { history: { location: { pathname } } } = prop;
  console.log(pathname);
  return (
    <div className="App">
      {!login && pathname !== '/' ? <NotLogged /> : (
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/carteira" exact component={ Wallet } />
        </Switch>
      )}

    </div>);
}

App.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default App;
