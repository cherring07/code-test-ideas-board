import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomButton = styled.button`
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  // background-color: lightpink;
  border-radius: 0;
  border: 2px solid palevioletred;
  color: grey;
  cursor: pointer;
  margin: 0;
  padding: 5px;
  text-align: center;
  transition: 0.3s ease-in-out;
  width: 200px;
  font-size: 0.8rem;
  margin-top: ${props => (props.spaceTop ? '1rem;' : '0;')};

  :hover {
    background-color: palevioletred;
    box-shadow: none;
    color: white;
  }

  :focus {
    background-color: palevioletred;
    box-shadow: 0 0 0 0.2rem lightpink;
    color: white;
  }
`;

const Button = ({ children, disabled, onClick, spaceTop = false }) => (
  <CustomButton disabled={disabled} onClick={onClick} spaceTop={spaceTop}>
    {children}
  </CustomButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  spaceTop: PropTypes.bool,
};

export default Button;
