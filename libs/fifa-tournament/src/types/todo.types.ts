import { ErrorResponse } from '@core/types';

export interface TodoData {
  id: number;
  title: string;
}

export interface TodoState {
  todo: TodoData;
  errors?: {
    todo?: ErrorResponse | string;
  }
}
