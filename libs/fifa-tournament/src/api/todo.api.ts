import { ApiService } from '@core/api';

const apiService = new ApiService();

export function fetchTodo(
  id: string,
): Promise<any> {
  return apiService.get({ url: `https://jsonplaceholder.typicode.com/todos/${id}`});
}