import React, { Component } from 'react';
import axios from 'axios';
import Logs from './Logs';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    axios.get('http://localhost:3005/logout')
    .then(response => {
      console.log(response);
      this.props.handleRedirect('HISTORY', 'LOGIN');
    })
    .catch(err => console.log(err))
  }

  render() {

    let { handlePageChange } = this.props;

    return (
      <div className="finish-container">
        <div className="finish-headers">
          <h1>Block Logs</h1>
        </div>
        <Logs />
        <div className="button-arrangement">
          <button onClick={handlePageChange}>RESTART</button>
          <button onClick={this.handleLogOut}>LOGOUT</button>
        </div>
      </div>
    );
  }
}
export default History;

