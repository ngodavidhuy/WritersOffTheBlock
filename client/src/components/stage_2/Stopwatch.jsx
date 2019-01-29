import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previousTime: 0,
      elapsedTime: 0,
      resetCount: 0,
      sessionFinished: false
    }

    this.handleUpdates = this.handleUpdates.bind(this);
    this.checkWordCount = this.checkWordCount.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.handleUpdates(), 200);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  checkWordCount(content) {
    let wordCount = content.split(/\s+/).length - 1
    if (wordCount > 10) {
      clearInterval(this.intervalID);
      this.setState({
        sessionFinished: true
      })
    }
  }

  handleUpdates() {
    this.checkWordCount(this.props.content);

    if (this.state.elapsedTime / 1000 > 10) {
      this.setState({
        elapsedTime: 0
      }, () => {
        this.props.handleContentReset();
      })
    } 

    if (this.state.resetCount !== this.props.resetCount) {
      this.setState({
        elapsedTime: 0,
        resetCount: this.props.resetCount
      });
    }

    const now = Date.now();
    this.setState( prevState => ({
      previousTime: now,
      elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
    }));
}

  render() {


    let seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <h1 className="idle-timer">
        {this.state.sessionFinished ? 'You did it!' : `${seconds > 20 ? 0 : seconds} seconds`}
      </h1>
    );
  }
}

export default Stopwatch;