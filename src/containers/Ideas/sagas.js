import { takeLatest, call, put, select } from 'redux-saga/effects';

import request from '../../utils/request';

import {
  IDEAS_REQUESTED,
  NEW_IDEA_REQUESTED,
  UPDATE_IDEA_REQUESTED,
} from './constants';

import {
  genericError,
  ideasReceived,
  newIdeaReceived,
  updateIdeaReceived,
} from './actions';

const url = 'http://127.0.0.1:8000/api/v1';

const newIdea = state => state.ideasReducer.newIdea;

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

export function* updateIdea() {
  const requestURL = `${url}/idea/update`;
  let selectedIdea = yield select(newIdea);

  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        body: selectedIdea.body,
        id: selectedIdea.id,
        title: selectedIdea.title,
      }),
    });

    yield put(updateIdeaReceived(response));
  } catch (err) {
    yield put(genericError(err));
  }
}

export function* ideasSaga() {
  yield takeLatest(IDEAS_REQUESTED, getIdeas);
  yield takeLatest(NEW_IDEA_REQUESTED, getNewIdea);
  yield takeLatest(UPDATE_IDEA_REQUESTED, updateIdea);
}

export default [ideasSaga];
