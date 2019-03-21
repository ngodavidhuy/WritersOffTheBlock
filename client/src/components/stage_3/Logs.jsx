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
    axios.get('http://localhost:3005/block/1')
    .then(response => {
      this.setState({
        history: response.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {

    let logs = this.state.history.map(log => {
      return (
        <li>
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