import * as actionTypes from '@fifa-tournament/actionTypes';
import { TodoState } from '@fifa-tournament/types';

const initialState: TodoState = {
  todo: {
    id: 0,
    title: '',
  },
  errors: {
    todo: ''
  }
}

export default function todoReducer(state: TodoState = initialState, action: actionTypes.TodoAction): TodoState {
  console.log('ACTION => ', action)
  switch (action.type) {
    case actionTypes.GET_TODO_SUCCESS:
      return {
        todo: action.payload,
      };
    case actionTypes.GET_TODO_FAILURE:
      return {
        ...state,
        errors: {
          todo: action.error
        }
      };
    default: {
      return state;
    }
  }
}