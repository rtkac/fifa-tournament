import { fork, call, put, take, takeEvery } from 'redux-saga/effects';

import * as api from '@fifa-tournament/api';
import * as actionTypes from '@fifa-tournament/actionTypes';
import * as actions from '@fifa-tournament/actions';
import { TodoData } from '@fifa-tournament/types';

function* fetchTodo({ payload }: actionTypes.GetTodoRequestAction) {
  try {
    const response: TodoData = yield call(api.fetchTodo, payload.id);
    yield put(actions.getTodoSuccess(response));
  } catch (e) {
    yield put(actions.getTodoFailure(e));
  }
}

function* watchFetchTodo() {
  yield takeEvery(actionTypes.GET_TODO_REQUEST, fetchTodo);
}

const TodoSagas = [
  fork(watchFetchTodo),
];

export default TodoSagas;