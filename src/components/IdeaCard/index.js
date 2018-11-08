import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

const ID = styled.span`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: grey;
  font-size: 0.75rem;
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: grey;
`;

const IdeaCard = ({ idea: { id, title } }) => (
  <Card>
    <ID>ID: {id}</ID>
    {title && <Title>{title}</Title>}
  </Card>
);

IdeaCard.propTypes = {
  idea: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default IdeaCard;
