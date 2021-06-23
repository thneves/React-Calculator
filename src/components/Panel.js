import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/Panel.css';

function Panel({ clickHandler }) {
  return (
    <>
      <div className="panel">
        <div className="panel-row">
          <Button name="AC" clickHandler={() => clickHandler('AC')} />
          <Button name="+/-" clickHandler={() => clickHandler('+/-')} />
          <Button name="%" clickHandler={() => clickHandler('%')} />
          <Button name="/" clickHandler={() => clickHandler('/')} />
        </div>
        <div className="panel-row">
          <Button name="7" clickHandler={() => clickHandler('7')} />
          <Button name="8" clickHandler={() => clickHandler('8')} />
          <Button name="9" clickHandler={() => clickHandler('9')} />
          <Button name="X" clickHandler={() => clickHandler('X')} />
        </div>
        <div className="panel-row">
          <Button name="5" clickHandler={() => clickHandler('5')} />
          <Button name="6" clickHandler={() => clickHandler('6')} />
          <Button name="7" clickHandler={() => clickHandler('7')} />
          <Button name="+" clickHandler={() => clickHandler('+')} />
        </div>
        <div className="panel-row">
          <Button name="0" clickHandler={() => clickHandler('0')} />
          <Button name="." clickHandler={() => clickHandler('.')} />
          <Button name="=" clickHandler={() => clickHandler('=')}/>
        </div>
      </div>
    </>
  );
}

Panel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Panel;
