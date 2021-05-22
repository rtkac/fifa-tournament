import { ErrorResponse } from '@core/types';

export const GET_TODO_REQUEST = 'GET_TODO_REQUEST';
export interface GetTodoRequestAction {
  type: typeof GET_TODO_REQUEST;
  payload: {
    id: string;
  }
}

export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export interface GetTodoSuccessAction {
  type: typeof GET_TODO_SUCCESS;
  payload: {
    id: number;
    title: string;
  }
}

export const GET_TODO_FAILURE = 'GET_TODO_FAILURE';
export interface GetTodoFailureAction {
  type: typeof GET_TODO_FAILURE;
  error: ErrorResponse | string;
}

export type TodoAction =
  | GetTodoRequestAction
  | GetTodoSuccessAction
  | GetTodoFailureAction;