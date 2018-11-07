import { OVERLAY_CLOSE, OVERLAY_OPEN } from './constants';

import ideas from './ideas.json';

export const initialState = {
  ideas: ideas,
  overlayOpen: false,
};

function ideasReducer(state = initialState, action) {
  switch (action.type) {
    case OVERLAY_CLOSE:
      return {
        ...state,
        overlayOpen: false,
      };

    case OVERLAY_OPEN:
      return {
        ...state,
        overlayOpen: true,
      };
    default:
      return state;
  }
}

export default ideasReducer;
