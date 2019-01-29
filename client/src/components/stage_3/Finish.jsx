import React from 'react';
import Log from './Log.jsx';

const Finish = ({handlePageChange}) => {
  return (
    <div className="finish-container">
      <div className="finish-headers">
        <h1>Block Logs</h1>
      </div>
      <Log />
      <div className="button-arrangement">
        <button onClick={handlePageChange}>RESTART</button>
        <button onClick={handlePageChange}>LOGOUT</button>
      </div>
    </div>
  );
}

export default Finish;

