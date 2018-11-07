import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

const Title = styled.h4`
  color: grey;
`;

const IdeaCard = ({ idea: { title } }) => (
  <Card>
    <Title>{title}</Title>
  </Card>
);

IdeaCard.propTypes = {
  idea: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default IdeaCard;
