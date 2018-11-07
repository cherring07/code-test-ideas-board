import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputErrorMessage = ({ error }) => {
  const ErrorMessage = styled.div`
    color: red;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
  `;

  return <ErrorMessage>{error}</ErrorMessage>;
};

InputErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default InputErrorMessage;
