import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from './globalStyle';
import Ideas from './containers/Ideas';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Ideas} />
        </Switch>

        <GlobalStyle />
      </Fragment>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
