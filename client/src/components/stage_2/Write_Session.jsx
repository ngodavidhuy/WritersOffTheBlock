import React, { Component } from 'react';

class Write_Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyPress(e)  {
    e.preventDefault();
    // console.log(e.key);
    let newContent = this.state.content + e.key;
    let newState = {
      content: newContent
    }
    this.setState(newState)
  }

  // handleKeyDown(e)  {
  //   console.log('bye');

  // }

  render () {
    const { handlePageChange } = this.props;

    return (
      <div className="session-container">
        <div className="session-headers">
          <h1 className="prompt">[PROMPT GOES HERE]</h1>
          <h1 className="idle-timer">[IDLE TIMER GOES HERE]</h1>
        </div>
        <textarea id="test" onKeyDown={this.handleKeyPress} value={this.state.content}></textarea>
        <div className="button-arrangement">
          <button onClick={handlePageChange}>BACK</button>
          <button onClick={handlePageChange}>NEXT</button>
        </div>
      </div>
    );
  }
}

export default Write_Session;