import { connect } from 'react-redux';
import Ideas from './Ideas';
import {
  ideasRequested,
  overlayOpen,
  overlayClose,
  newIdeaRequested,
} from './actions';

const mapStateToProps = ({
  form,
  ideasReducer: { ideas, newIdea, overlayStatus },
}) => ({
  form,
  ideas,
  newIdea,
  overlayStatus,
});

const mapDispatchToProps = dispatch => ({
  newIdeaRequested: () => dispatch(newIdeaRequested()),
  ideasRequested: () => dispatch(ideasRequested()),
  overlayOpen: () => dispatch(overlayOpen()),
  overlayClose: () => dispatch(overlayClose()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ideas);
