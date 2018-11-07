import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import IdeaForm from '../IdeaForm';

const Curtain = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  background-color: lightblue;
  box-shadow: 0 3px 6px 0 hsla(0, 0%, 0%, 0.3);
  padding: 16px;
  transition: 0.3s ease-in-out;
  max-width: 600px;
  width: 100%;
  margin: auto;
  margin-top: 100px;
`;

const IdeaOverlay = ({ props, overlayClose }) => (
  <Curtain onClick={overlayClose}>
    <Inner>
      <IdeaForm {...props} />
      <Button id="Cancel idea" onClick={overlayClose}>
        Cancel
      </Button>
    </Inner>
  </Curtain>
);

IdeaOverlay.propTypes = {
  overlayClose: PropTypes.func,
};

export default IdeaOverlay;
