import React, { Component } from 'react';
import axios from 'axios';
import BlockEntry from './BlockEntry';

class Blocks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3005/block')
    .then(response => {
      this.setState({
        history: response.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {

    let block_entries = this.state.history.map((block, idx) => {
      return (
        <li key={idx}>
          <BlockEntry block={block} entry={idx + 1} />
        </li>
        
      );
    });

    return (
      <div className="history-blocks">
        <ul className="history-ul">
          {block_entries}
        </ul>
      </div>
    );
  }
}

export default Blocks;