import React, {Component} from 'react';

const MembersOnly = ({handlePageChange}) => {
  return (
    <div className="login-container">
      <div className="cover-photo">W</div>
      <div className="search-history">
        <form className="search-form">
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
            <button className="signup-button">SIGNUP</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MembersOnly;

