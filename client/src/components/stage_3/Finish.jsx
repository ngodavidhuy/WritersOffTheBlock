import React from 'react';

const Finish = ({handlePageChange}) => {
  return (
    <div className="finish-container">
      <div className="finish-headers">
        <h1>Block Logs</h1>
      </div>
      <div className="search-history">
        <form className="search-form">
          <label>Email: </label>
          <input type="email" id="email" name="email"></input>
          <label>Password: </label>
          <input type="password" id="password" name="password"></input>
          <button className="search-button"><span>SEARCH</span></button>
        </form>
      </div>
      <div className="finish-logs">
        <ul>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
          <li>LOG 1</li>
          <li>LOG 2</li>
          <li>LOG 3</li>
          <li>LOG 4</li>
        </ul>
      </div>
      <div className="button-arrangement">
        <button onClick={handlePageChange}>BACK</button>
        <button onClick={handlePageChange}>FRONT</button>
      </div>
    </div>
  );
}

export default Finish;