import React from 'react';
import '../index.css';
import Display from './Display';
import Panel from './Panel';
import '../styles/App.css';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(button) {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;

    Calculate({ total, next, operation }, button);

    this.setState({

    });
  }

  render() {
    return (
      <>
        <div className="calculator">
          <Display result={Calculate(null, null)} />
          <Panel />
        </div>
      </>
    );
  }
}

export default App;
