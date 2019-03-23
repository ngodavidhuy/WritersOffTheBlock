import React, { Component } from 'react';

class LogEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let {log_number, block} = this.props.content;

    return(
      <div className="finish-li">
          <div className="list-item-1">
            <span>{`LOG ${log_number}`}</span>
          </div>
          <div className="list-item-button">
            <button>DOWNLOAD</button>
          </div>
          <div className="list-item-button">
            <button>DELETE</button>
          </div>
      </div>
    );
  }
}

export default LogEntry;