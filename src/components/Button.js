import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button(props) {
  const { name } = props;
  return <button className="btn" type="button">{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
