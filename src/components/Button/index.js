import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: white;
  border-radius: 0;
  border: 2px solid black;
  color: black;
  cursor: pointer;
  margin: 0;
  padding: 5px;
  text-align: center;
  transition: 0.3s ease-in-out;
  width: 200px;
  font-size: 1rem;

  :hover {
    background-color: black;
    box-shadow: none;
    color: white;
  }

  :focus {
    background-color: black;
    box-shadow: 0 0 0 0.2rem black;
    color: white;
  }
`;

const Button = ({ children, disabled, onClick }) => (
  <CustomButton disabled={disabled} onClick={onClick}>
    {children}
  </CustomButton>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Button;
