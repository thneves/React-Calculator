import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button({ name, clickHandler }) {
  return <button className="btn" onClick={clickHandler} type="button">{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};

export default Button;
