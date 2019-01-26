import React, {Component} from 'react';
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
      stage: 2,
    }
  }

  render() {
    let Stage = this.stages[this.state.stage];
    return (
      <div className="test">
        <h1>Writer's Off the Block</h1>
        <Stage />
      </div>
    );
  }
}

export default App;