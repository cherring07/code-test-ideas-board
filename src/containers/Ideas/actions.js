import { OVERLAY_CLOSE, OVERLAY_OPEN } from './constants';

export function newIdeaRequested() {
  return {
    type: OVERLAY_OPEN,
  };
}

export function cancelNewIdeaRequested() {
  return {
    type: OVERLAY_CLOSE,
  };
}
