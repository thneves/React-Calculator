import React, { useState } from 'react';
import '../index.css';
import Display from './Display';
import Panel from './Panel';
import '../styles/App.css';
import Calculate from '../logic/calculate';

const App = () => {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (button) => {
    const result = Calculate(calculation, button);
    setCalculation({ ...result });
  };

  const result = calculation;

  return (
    <div className="back">
      <div className="calculator">
        <Display
          result={result.total}
          next={result.next}
          operation={result.operation}
        />
        <Panel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default App;
