/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, text }) => <label htmlFor={htmlFor}>{text}</label>;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Label;
/* eslint-enable jsx-a11y/label-has-for */
