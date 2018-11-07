import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputErrorMessage from '../InputErrorMessage';
import Label from '../Label';

const CustomInput = styled.input`
  background-clip: padding-box;
  background-color: white;
  border-radius: 0;
  border: 0;
  caret-color: lightblue;
  color: black;
  display: block;
  line-height: 1.25;
  padding: 0.5rem 0.75rem;
  transition: 0.3s ease-in-out;
  width: 100%;

  :focus {
    box-shadow: none;
    border: 2px solid lightgrey;
    outline: none;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: lightgrey;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: lightgrey;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: lightgrey;
  }
`;

const InputText = ({
  autofocus,
  input,
  label,
  meta: { touched, error },
  onChange,
  placeholder,
  type,
}) => (
  <div>
    <Label htmlFor={input.name} text={label} />
    <CustomInput
      autoFocus={autofocus}
      onChange={onChange}
      id={input.name}
      name={input.name}
      placeholder={placeholder}
      type={type}
      {...input}
    />
    {touched && error && <InputErrorMessage error={error} />}
  </div>
);

InputText.propTypes = {
  extra: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputText;
