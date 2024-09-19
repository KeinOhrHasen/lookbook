// lib/redux/rootSaga.ts
import { all } from 'redux-saga/effects';
import { watchLoadAsync } from '@/lib/redux/features/grids/saga';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* rootSaga() {
  yield all([helloSaga(), watchLoadAsync()]);
}
