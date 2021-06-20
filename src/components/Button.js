import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  let { name } = props
  return <button>{name}</button>
}

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;