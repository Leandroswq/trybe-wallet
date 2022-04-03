import React from 'react';
import { Link } from 'react-router-dom';

export default function NotLogged() {
  return (
    <div>
      you are not logged in, to log in
      {' '}
      <Link to="/">click here.</Link>
    </div>);
}
