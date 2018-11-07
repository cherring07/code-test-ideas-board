import { connect } from 'react-redux';
import Ideas from './Ideas';
import { cancelNewIdeaRequested, newIdeaRequested } from './actions';

const mapStateToProps = ({ form, ideasReducer: { ideas, overlayOpen } }) => ({
  ideas,
  overlayOpen,
  form,
});

const mapDispatchToProps = dispatch => ({
  newIdeaRequested: () => dispatch(newIdeaRequested()),
  cancelNewIdeaRequested: () => dispatch(cancelNewIdeaRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ideas);
