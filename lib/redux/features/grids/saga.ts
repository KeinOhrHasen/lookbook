import { put, call, takeLatest } from 'redux-saga/effects';
import { list, listSuccess } from '@/lib/redux/features/grids/slice';
import { loadGrids } from '@/src/core/utils/grids-async-calls';

export const loadAsyncRequest = 'grids/loadAsyncRequest';

export function* loadAsync() {
  try {
    const listResult = yield call(loadGrids);
    yield put(listSuccess(listResult));
  } catch {
    console.log('error happend loadAsync');
  }
}

export function* watchLoadAsync() {
  yield takeLatest(list.type, loadAsync);
}
