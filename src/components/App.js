import React from 'react';
import '../index.css';
import Display from './Display';
import Panel from './Panel';
import '../styles/App.css';
import Calculate from '../logic/calculate';

function App() {
  return (
    <>
      <div className="calculator">
        <Display result={Calculate(null, null)} />
        <Panel />
      </div>
    </>
  );
}

export default App;
