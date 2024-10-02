import { all } from 'redux-saga/effects';
import { watchLoadGridsAsync } from '@/lib/redux/features/grids/saga';
import { watchLoadSessionsAsync, watchUpdateStatusAsync } from './features/sessions/saga';

export function* rootSaga() {
  yield all([watchLoadGridsAsync(), watchLoadSessionsAsync(), watchUpdateStatusAsync()]);
}
