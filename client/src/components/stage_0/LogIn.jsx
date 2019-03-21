import React, {Component} from 'react';
// import {
//   Route,
//   NavLink,
//   Redirect
// } from 'react-router-dom';

const LogIn = ({handlePageChange}) => {
  return (
    <div className="login-container">
      <div className="cover-photo">W</div>
      <div className="search-history">
        <form className="search-form" method="GET" disabled>
          <div className="email">
            <label>Email: </label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div className="password">
            <label>Password: </label>
            <input type="password" id="password" name="password"></input>
          </div>
          <div className="button-arrangement">
            <button className="login-button" onClick={handlePageChange}>LOG IN</button>
            <button className="signup-button" onClick={handlePageChange}>SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;

