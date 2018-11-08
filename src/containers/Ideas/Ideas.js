import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import IdeaCard from '../../components/IdeaCard';
import IdeaOverlay from '../../components/IdeaOverlay';
import Navbar from '../../components/Navbar';

class Ideas extends Component {
  componentDidMount() {
    this.props.ideasRequested();
  }

  componentDidUpdate(prevProps) {
    if (this.props.newIdea !== prevProps.newIdea) {
      if (this.props.newIdea.id) {
        this.props.overlayOpen();
      }
    }

    if (this.props.refresh !== prevProps.refresh) {
      this.props.overlayClose();
      this.props.ideasRequested();
    }
  }

  render() {
    const { ideas, newIdeaRequested, overlayStatus } = this.props;

    const ideaCards = ideas.map(idea => <IdeaCard idea={idea} key={idea.id} />);

    return (
      <div>
        <Navbar onNewIdeaClick={newIdeaRequested} />

        {overlayStatus && <IdeaOverlay {...this.props} />}

        {ideaCards && <Flex flexWrap="wrap">{ideaCards}</Flex>}
      </div>
    );
  }
}

Ideas.propTypes = {
  ideas: PropTypes.array,
  ideasRequested: PropTypes.func,
  newIdea: PropTypes.object,
  newIdeaRequested: PropTypes.func,
  overlayClose: PropTypes.func,
  overlayOpen: PropTypes.func,
  overlayStatus: PropTypes.bool,
  refresh: PropTypes.bool,
};

export default Ideas;
