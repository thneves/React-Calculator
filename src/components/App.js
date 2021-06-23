/* eslint-disable react/no-access-state-in-setstate */

import React from 'react';
import '../index.css';
import Display from './Display';
import Panel from './Panel';
import '../styles/App.css';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(button) {
    this.setState(
      Calculate(this.state, button),
    );
  }

  render() {
    return (
      <div className="calculator">
        {/* eslint-disable-next-line react/destructuring-assignment, max-len */}
        <Display result={this.state.total} next={this.state.next} operation={this.state.operation} />
        <Panel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
