import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

const Title = styled.h4`
  color: grey;
`;

const IdeaCard = ({ idea: { id } }) => (
  <Card>
    <Title>ID: {id}</Title>
  </Card>
);

IdeaCard.propTypes = {
  idea: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default IdeaCard;
