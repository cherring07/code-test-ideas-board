import {
  IDEAS_RECEIVED,
  IDEAS_REQUESTED,
  NEW_IDEA_RECEIVED,
  NEW_IDEA_REQUESTED,
  OVERLAY_CLOSE,
  OVERLAY_OPEN,
} from './constants';

export const initialState = {
  loading: false,
  ideas: [],
  newIdea: {},
  overlayStatus: false,
};

function ideasReducer(state = initialState, action) {
  switch (action.type) {
    case IDEAS_RECEIVED:
      return {
        ...state,
        ideas: action.ideas,
        loading: false,
      };

    case IDEAS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case NEW_IDEA_RECEIVED:
      return {
        ...state,
        newIdea: action.idea,
        loading: false,
      };

    case NEW_IDEA_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case OVERLAY_CLOSE:
      return {
        ...state,
        overlayStatus: false,
        newIdea: {},
      };

    case OVERLAY_OPEN:
      return {
        ...state,
        overlayStatus: true,
      };
    default:
      return state;
  }
}

export default ideasReducer;
