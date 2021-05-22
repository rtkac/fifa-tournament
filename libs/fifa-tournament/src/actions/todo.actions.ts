import { ErrorResponse } from '@core/types';
import * as actionTypes from '../actionTypes';
import { TodoData } from '@fifa-tournament/types';

export function getTodoRequest(id: string): actionTypes.GetTodoRequestAction {
  return {
    type: actionTypes.GET_TODO_REQUEST,
    payload: {
      id,
    }
  };
}

export function getTodoSuccess(response: TodoData): actionTypes.GetTodoSuccessAction {
  return {
    type: actionTypes.GET_TODO_SUCCESS,
    payload: response,
  };
}

export function getTodoFailure(error: ErrorResponse | string): actionTypes.GetTodoFailureAction {
  return {
    type: actionTypes.GET_TODO_FAILURE,
    error,
  };
}