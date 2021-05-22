import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';

export const mainReducer = combineReducers({
  todo: todoReducer,
});

export type AppState = ReturnType<typeof mainReducer>;