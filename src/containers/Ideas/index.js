import { connect } from 'react-redux';
import Ideas from './Ideas';
import {
  ideasRequested,
  newIdeaRequested,
  overlayClose,
  overlayOpen,
  updateIdeaRequested,
} from './actions';

const mapStateToProps = ({
  form,
  ideasReducer: { ideas, newIdea, overlayStatus, refresh },
}) => ({
  form,
  ideas,
  newIdea,
  overlayStatus,
  refresh,
});

const mapDispatchToProps = dispatch => ({
  updateIdeaRequested: (title, body) =>
    dispatch(updateIdeaRequested(title, body)),
  newIdeaRequested: () => dispatch(newIdeaRequested()),
  ideasRequested: () => dispatch(ideasRequested()),
  overlayOpen: () => dispatch(overlayOpen()),
  overlayClose: () => dispatch(overlayClose()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ideas);
