import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Button from '../Button';
import InputText from '../InputText';

const IdeaForm = ({ handleSubmit, onChange, submitting }) => (
  <form>
    <Field
      onChange={onChange}
      component={InputText}
      id="Title"
      label="Title"
      name="title"
      placeholder="Title..."
      type="text"
      autofocus={true}
    />

    <Field
      onChange={onChange}
      component={InputText}
      id="Body"
      label="Body"
      name="body"
      placeholder="Body..."
      type="text"
    />

    <Button disabled={submitting} id="Add idea" onClick={handleSubmit}>
      Add
    </Button>
  </form>
);

IdeaForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'formNewIdea',
})(IdeaForm);
