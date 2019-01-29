import React, { Component } from 'react';
import axios from 'axios';
import Stopwatch from './Tracker.jsx';
const enableTabs = require('../../utilities/enableTabs');

class Write_Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      prompt: '',
      resetCount: 0
    }
    this.handleContent = this.handleContent.bind(this);
    this.handleContentReset = this.handleContentReset.bind(this);
  }

  componentDidMount() {
    enableTabs();
    axios.get('http://localhost:3005/prompts')
    .then(response => {
      let prompts = response.data;
      let randomNumber = Math.floor(Math.random() * prompts.length)
      this.setState({
        prompt: prompts[randomNumber].prompt
      })
    })
    .catch(err => console.log(err))
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
          <h1 className="prompt">{`Prompt: ${this.state.prompt}`}</h1>
        </div>
        <textarea onChange={this.handleContent} value={this.state.content} />
        <Stopwatch 
            handleContentReset={this.handleContentReset} 
            resetCount={this.state.resetCount} 
            content={this.state.content}
        />
        <div className="button-arrangement">
          <button onClick={handlePageChange}>BACK</button>
          <button onClick={handlePageChange}>SAVE</button>
        </div>
      </div>
    );
  }
}

export default Write_Session;
