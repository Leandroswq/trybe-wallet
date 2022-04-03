import React from 'react';
import { Link } from 'react-router-dom';
import './css/NotLogged.css';

export default function NotLogged() {
  return (
    <div className="container-centralized background-color-prymary ">
      <div className="Not-logged ">
        <p className="font-size-xx">
          You are not logged
        </p>
        <Link className="font-size-xx Not-logged__link" to="/">Click here</Link>
        <span className="font-size-xx">
          {' '}
          to login
        </span>
      </div>
    </div>);
}
