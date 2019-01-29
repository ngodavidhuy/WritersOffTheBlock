import React, { Component } from 'react';

class LogView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let {block} = this.props.content;
    return(
      <li className="finish-li">
          <p>{block}</p>
      </li>
    );
  }
}

export default LogView;