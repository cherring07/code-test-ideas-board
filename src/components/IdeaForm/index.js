import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Button from '../Button';
import InputText from '../InputText';

const IdeaForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={InputText}
      id="Title"
      label="Title"
      name="title"
      placeholder="Title..."
      type="text"
      autofocus={true}
    />

    <Field
      component={InputText}
      id="Body"
      label="Body"
      name="body"
      placeholder="Body..."
      type="text"
    />

    <Button
      disabled={submitting}
      id="Add idea"
      onClick={handleSubmit}
      spaceTop={true}
    >
      {submitting ? 'Adding' : 'Add new idea'}
    </Button>
  </form>
);

IdeaForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'formNewIdea',
})(IdeaForm);
