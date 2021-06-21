import React from 'react';
import '../index.css';
import Display from './Display';
import Panel from './Panel';
import '../styles/App.css';

function App() {
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
