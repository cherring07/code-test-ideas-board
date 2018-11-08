import {
  GENERIC_ERROR,
  IDEAS_RECEIVED,
  IDEAS_REQUESTED,
  NEW_IDEA_RECEIVED,
  NEW_IDEA_REQUESTED,
  OVERLAY_CLOSE,
  OVERLAY_OPEN,
  UPDATE_IDEA_RECEIVED,
  UPDATE_IDEA_REQUESTED,
} from './constants';

export function genericError(error) {
  return {
    type: GENERIC_ERROR,
    error,
  };
}

export function ideasRequested() {
  return {
    type: IDEAS_REQUESTED,
  };
}

export function ideasReceived(ideas) {
  return {
    type: IDEAS_RECEIVED,
    ideas,
  };
}

export function newIdeaRequested() {
  return {
    type: NEW_IDEA_REQUESTED,
  };
}

export function newIdeaReceived(idea) {
  return {
    type: NEW_IDEA_RECEIVED,
    idea,
  };
}

export function overlayOpen() {
  return {
    type: OVERLAY_OPEN,
  };
}

export function overlayClose() {
  return {
    type: OVERLAY_CLOSE,
  };
}

export function updateIdeaRequested(title, body) {
  return {
    type: UPDATE_IDEA_REQUESTED,
    title,
    body,
  };
}

export function updateIdeaReceived(idea) {
  return {
    type: UPDATE_IDEA_RECEIVED,
    idea,
  };
}
