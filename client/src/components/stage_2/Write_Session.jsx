import React, { Component } from 'react';
import Stopwatch from './Stopwatch.jsx';
const enableTabs = require('../../utilities/enableTabs');

class Write_Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      isCompleted: false,
      prompt: '',
      resetCount: 0
    }
    this.handleContent = this.handleContent.bind(this);
    this.handleContentReset = this.handleContentReset.bind(this);
  }

  componentDidMount() {
    enableTabs();  
  }

  handleContent(e) {
    let newCount = this.state.resetCount + 1;
    this.setState({
      content: e.target.value,
      resetCount: newCount
    });
  }

  handleContentReset() {
    this.setState({
      content: ''
    })
  }

  render () {
    const { handlePageChange } = this.props;

    return (
      <div className="session-container">
        <div className="session-headers">
          <h1 className="prompt">[PROMPT GOES HERE]</h1>
          <Stopwatch 
            handleContentReset={this.handleContentReset} 
            resetCount={this.state.resetCount} 
            content={this.state.content}
            />
        </div>
        <textarea onChange={this.handleContent} value={this.state.content} />
        <div className="button-arrangement">
          <button onClick={handlePageChange}>BACK</button>
          <button onClick={handlePageChange}>SAVE</button>
        </div>
      </div>
    );
  }
}

export default Write_Session;
