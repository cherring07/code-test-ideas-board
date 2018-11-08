import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import IdeaForm from '../IdeaForm';

const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

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
  margin: 100px auto auto;
  max-width: 600px;
  padding: 16px;
  position: relative;
  transition: 0.3s ease-in-out;
  width: 100%;
`;

const IdeaOverlay = ({ newIdea, overlayClose, updateIdeaRequested, props }) => (
  <Outer>
    <Curtain onClick={overlayClose} />
    <Inner>
      <h2>ID: {newIdea.id}</h2>
      <IdeaForm
        onSubmit={values => updateIdeaRequested(values.title, values.body)}
        {...props}
      />
      <Button id="Cancel idea" onClick={overlayClose} spaceTop={true}>
        Cancel
      </Button>
    </Inner>
  </Outer>
);

IdeaOverlay.propTypes = {
  overlayClose: PropTypes.func,
};

export default IdeaOverlay;
