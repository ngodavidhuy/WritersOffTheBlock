import React from 'react';
import Logs from './Logs';

const History = ({handlePageChange}) => {
  return (
    <div className="finish-container">
      <div className="finish-headers">
        <h1>Block Logs</h1>
      </div>
      <Logs />
      <div className="button-arrangement">
        <button onClick={handlePageChange}>RESTART</button>
        <button onClick={handlePageChange}>LOGOUT</button>
      </div>
    </div>
  );
}

export default History;

