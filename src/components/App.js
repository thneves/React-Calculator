import React from 'react';
import '../index.css';
import Display from './Display';
import Panel from './Panel';
import '../styles/App.css';
import Calculate from '../logic/calculate';
import Button from './Button';

function App() {
  Calculate({ total: null, next: null, operation: null }, <Button />);
  return (
    <>
      <div className="calculator">
        <Display result="10" />
        <Panel />
      </div>
    </>
  );
}

export default App;
