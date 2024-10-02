import { put, call, takeLatest } from 'redux-saga/effects';
import { sessionsList, sessionsListSuccess, sessionUpdateStatus, sessionUpdateStatusSuccess } from './slice';
import { loadSessions, updateStatus } from '@/src/core/utils/sessions-async-calls';

export const loadAsyncRequest = 'grids/loadAsyncRequest';

export function* loadAsync() {
  try {
    const listResult = yield call(loadSessions);
    yield put(sessionsListSuccess(listResult));
  } catch {
    console.log('error happend loadAsync');
  }
}

export function* UpdateStatusAsync(someArg) {
  console.log('UpdateStatusAsync', someArg.payload);

  try {
    const listResult = yield call(updateStatus, someArg.payload);
    yield put(sessionUpdateStatusSuccess(listResult));
  } catch {
    console.log('error happend UpdateStatusAsync');
  }
}

export function* watchLoadSessionsAsync() {
  yield takeLatest(sessionsList.type, loadAsync);
}

export function* watchUpdateStatusAsync() {
  yield takeLatest(sessionUpdateStatus.type, UpdateStatusAsync);
}
