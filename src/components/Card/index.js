import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 3px 6px 0 hsla(0, 0%, 0%, 0.3);
  cursor: pointer;
  font-size: 1rem;
  height: 150px;
  margin: 10px;
  padding: 16px;
  transition: 0.3s ease-in-out;
  width: 150px;
`;

const Card = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
