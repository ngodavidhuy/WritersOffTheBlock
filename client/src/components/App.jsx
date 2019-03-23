import React, { Component } from 'react';

// App Components
import LogIn from './stage_0/LogIn';
import SignUp from './stage_0/SignUp';
import Introduction from './stage_1/Introduction';
import Session from './stage_2/Session';
import History from './stage_3/History';

class App extends Component {
  constructor(props) {
    super(props);
    this.stages = {
      0: LogIn,
      1: Introduction,
      2: Session,
      3: History,
      4: SignUp
    }

    this.state = {
      stage: 0,
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handlePageChange(e) {
    e.preventDefault();
    let action = e.target.innerHTML;

    if (action === 'HISTORY') this.setState({stage: 3});
    if (action === 'LOGOUT') this.setState({stage: 0});
    if (action === 'SIGN UP') this.setState({stage: 4});

    if (action === 'BACK' || action === 'RESTART') {
      if (this.state.stage === 4) {
        this.setState({
          stage: 0
        });
      } else {
        this.setState(prevState => ({
          stage: prevState.stage - 1
        }));
      }
    }

    if (action === 'BEGIN'|| 
    action === 'SAVE') {
      this.setState(prevState => ({
        stage: prevState.stage + 1
      }));
    }
  }

  handleRedirect(from, to) {
    if ((from === 'SIGNUP' || from === 'LOGIN') && 
    to === 'INTRODUCTION') {
      this.setState({stage: 1});
    } else if (from === 'HISTORY' && 
    to === 'LOGIN') {
      this.setState({stage: 0});
    }

    if (from === 'SESSION' && to === 'HISTORY') this.setState({stage: 3});
  }

  render() {
    let Stage = this.stages[this.state.stage];
    return (
      <div className="main-container">
        <Stage handlePageChange={this.handlePageChange} handleRedirect={this.handleRedirect} />
      </div>
    );
  }
}


export default App;