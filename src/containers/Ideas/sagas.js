import { takeLatest, call, put } from 'redux-saga/effects';

import request from '../../utils/request';
import { IDEAS_REQUESTED, NEW_IDEA_REQUESTED } from './constants';

import { ideasReceived, newIdeaReceived, genericError } from './actions';

const url = 'http://127.0.0.1:8000/api/v1';

export function* getIdeas() {
  const requestURL = `${url}/ideas`;

  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });

    yield put(ideasReceived(response));
  } catch (err) {
    yield put(genericError(err));
  }
}

export function* getNewIdea() {
  const requestURL = `${url}/ideas/new`;

  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });

    yield put(newIdeaReceived(response));
  } catch (err) {
    yield put(genericError(err));
  }
}

export function* ideasSaga() {
  yield takeLatest(IDEAS_REQUESTED, getIdeas);
  yield takeLatest(NEW_IDEA_REQUESTED, getNewIdea);
}

export default [ideasSaga];
