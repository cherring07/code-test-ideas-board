import {
  IDEAS_RECEIVED,
  IDEAS_REQUESTED,
  NEW_IDEA_RECEIVED,
  NEW_IDEA_REQUESTED,
  OVERLAY_CLOSE,
  OVERLAY_OPEN,
  UPDATE_IDEA_RECEIVED,
  UPDATE_IDEA_REQUESTED,
} from './constants';

export const initialState = {
  refresh: false,
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
        ideas: [],
        loading: true,
        refresh: false,
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

    case UPDATE_IDEA_REQUESTED:
      return {
        ...state,
        loading: true,
        newIdea: {
          ...state.newIdea,
          title: action.title,
          body: action.body,
        },
      };

    case UPDATE_IDEA_RECEIVED:
      return {
        ...state,
        loading: true,
        newIdea: {},
        refresh: true,
      };
    default:
      return state;
  }
}

export default ideasReducer;
