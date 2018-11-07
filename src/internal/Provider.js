import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';

import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore({});

export default function Provider({ children }) {
  return (
    <ReduxProvider store={store}>
      <Router>{children}</Router>
    </ReduxProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};
