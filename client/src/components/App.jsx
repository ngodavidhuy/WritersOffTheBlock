import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import LogIn from './stage_0/LogIn';
import SignUp from './stage_0/SignUp';
import Introduction from './stage_1/Introduction';
import Session from './stage_2/Session';
import History from './stage_3/History';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }

//   render() {
//     return (
//       <BrowserRouter>
//         <div className="main-container">
//           <Switch>
//             <Route exact path="/" component={LogIn} />
//             <Route exact path="/signup" component={SignUp} />
//             <Route path="/introduction" component={Introduction} />
//             <Route path="/session" component={Session} />
//             <Route path="/history" component={History} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

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
      stage: 4,
    }

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(e) {
    e.preventDefault();
    let action = e.target.innerHTML;

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

    if (action === "LOG IN" || action === 'BEGIN'|| action === 'SAVE') {
      this.setState(prevState => ({
        stage: prevState.stage + 1
      }));
    }

    if (action === 'HISTORY') {
      this.setState({
        stage: 3
      })
    }

    if (action === 'LOGOUT') {
      this.setState({
        stage: 0
      })
    }


    if (action === 'SIGN UP') {
      this.setState({
        stage: 4
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