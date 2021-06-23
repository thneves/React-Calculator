import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

function Display({ result, next, operation }) {
  return (
    <div className="display">
      <h2>{ next || operation || result || '0' }</h2>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  next: null,
  operation: null,
};

export default Display;
