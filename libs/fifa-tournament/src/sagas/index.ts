import { all } from 'redux-saga/effects';
import TodoSagas from './todoSaga';

export default function* rootSaga() {
  yield all([
    ...TodoSagas,
  ]);
}