import React from 'react';
import Button from './Button';
import '../styles/Panel.css';

function Panel() {
  return (
    <>
      <div className="panel">
        <div className="panel-row">
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="/" />
        </div>
        <div className="panel-row">
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="X" />
        </div>
        <div className="panel-row">
          <Button name="5" />
          <Button name="6" />
          <Button name="7" />
          <Button name="+" />
        </div>
        <div className="panel-row">
          <Button name="0" />
          <Button name="." />
          <Button name="=" />
        </div>
      </div>
    </>
  );
}

export default Panel;
