import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import IdeaCard from '../../components/IdeaCard';
import IdeaOverlay from '../../components/IdeaOverlay';
import Navbar from '../../components/Navbar';

class Ideas extends Component {
  render() {
    const { ideas, newIdeaRequested, overlayOpen } = this.props;

    const ideaCards = ideas.map(idea => <IdeaCard idea={idea} key={idea.id} />);

    return (
      <div>
        <Navbar onNewIdeaClick={newIdeaRequested} />
        {overlayOpen && <IdeaOverlay {...this.props} />}

        <Flex flexWrap="wrap">{ideaCards}</Flex>
      </div>
    );
  }
}

Ideas.propTypes = {
  newIdeaRequested: PropTypes.func,
  overlayOpen: PropTypes.bool,
};

export default Ideas;
