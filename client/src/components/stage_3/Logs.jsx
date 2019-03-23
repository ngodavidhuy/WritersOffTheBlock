import React, { Component } from 'react';
import axios from 'axios';
import LogEntry from './LogEntry';
import LogView from './LogView';

class Logs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3005/block')
    .then(response => {
      this.setState({
        history: response.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {

    let logs = this.state.history.map((log, idx) => {
      return (
        <li key={idx}>
          <LogEntry content={log} />
          <LogView content={log} />
        </li>
        
      );
    });

    return (
      <div className="finish-logs">
        <ul className="finish-ul">
          {logs}
        </ul>
      </div>
    );
  }
}

export default Logs;