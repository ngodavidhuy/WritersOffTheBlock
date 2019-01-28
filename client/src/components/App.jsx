import React, { Component } from 'react';
import Kickoff from './stage_1/Kickoff.jsx';
import Write_Session from './stage_2/Write_Session.jsx';
import Finish from './stage_3/Finish.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.stages = {
      1: Kickoff,
      2: Write_Session,
      3: Finish
    }

    this.state = {
      stage: 3,
    }

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(e) {
    e.preventDefault();

    let action = e.target.innerHTML;
    if (action === 'BACK') {
      this.setState(prevState => ({
        stage: prevState.stage - 1
      }));
    }

    if (action === 'NEXT') {
      this.setState(prevState => ({
        stage: prevState.stage + 1
      }));
    }

    if (action === 'HISTORY') {
      this.setState({
        stage: 3
      })
    }

    if (action === 'FRONT') {
      this.setState({
        stage: 1
      })
    }
    
  }

  render() {
    let Stage = this.stages[this.state.stage];
    return (
      <div className="main-container">
        <Stage handlePageChange={this.handlePageChange} />
      </div>
    );
  }
}

export default App;