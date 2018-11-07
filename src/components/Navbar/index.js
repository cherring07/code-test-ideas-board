import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'rebass';

import Button from '../Button';

const Wrapper = styled.div`
  background-color: lightblue;
  padding: 10px 20px;
`;

const Header = styled.div`
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
`;

const Navbar = ({ onNewIdeaClick }) => (
  <Wrapper>
    <Flex alignItems="center" justifyContent="space-between">
      <Header>Idea board</Header>

      <Button onClick={onNewIdeaClick}>Add new idea</Button>
    </Flex>
  </Wrapper>
);

Navbar.propTypes = {
  onNewIdeaClick: PropTypes.func,
};

export default Navbar;
