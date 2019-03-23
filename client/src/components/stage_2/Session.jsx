import React, { Component } from 'react';
import axios from 'axios';
import Stopwatch from './Stopwatch';
const enableTabs = require('../../utilities/enableTabs');

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      prompt: '',
      resetCount: 0,
      canSave: false
    }
    this.handleContent = this.handleContent.bind(this);
    this.handleContentReset = this.handleContentReset.bind(this);
    this.handleBlockPost = this.handleBlockPost.bind(this);
    this.enableSave = this.enableSave.bind(this);
  }

  componentDidMount() {
    enableTabs();
    axios.get('http://localhost:3005/prompt')
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

  enableSave() {
    this.setState({
      canSave: true
    })
  }

  handleBlockPost() {
    let { content, prompt, canSave } = this.state;
    if (canSave) {
      let userData = {
        prompt,
        content
      }

      console.log('POSTING BLOCK');
      axios.post('http://localhost:3005/block', userData)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    }
  }

  render () {
    const { handlePageChange } = this.props;
    const { canSave } = this.state;

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
            enableSave={this.enableSave}
        />
        <div className="button-arrangement">
          <button type="button" 
          onClick={handlePageChange}>
          BACK
          </button>
          <button type="button" 
          className={canSave ? null : 'session-save-disabled'} 
          onClick={canSave ? this.handleBlockPost : null}>
          SAVE
          </button>
        </div>
      </div>
    );
  }
}

export default Session;
