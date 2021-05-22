import axios from 'axios';
import { SuccessFetchResponse, ErrorResponse } from '@core/types';

interface ApiServiceInterface {
  url: string;
  options?: RequestInit;
}

export class ApiService {
  private headers: any;
  constructor() {
    this.headers = {
      'Accept': 'application/json;charset=UTF-8',
      'Content-Type': 'application/json',
    }
  }

  onSuccess(response: SuccessFetchResponse) {
    return response.data;
  }

  onError(error: ErrorResponse) {
    return Promise.reject(error.response.data);
  }


  async get(params: ApiServiceInterface): Promise<SuccessFetchResponse | ErrorResponse> {
    return await axios.get(params.url, {
      ...this.headers,
      ...params.options?.headers,
    }).then(this.onSuccess).catch(this.onError);
  }

  async post(params: ApiServiceInterface): Promise<SuccessFetchResponse | ErrorResponse> {
    return await axios.post(params.url, {
      ...this.headers,
      ...params.options?.headers,
    }).then(this.onSuccess).catch(this.onError);;
  }

  async put(params: ApiServiceInterface): Promise<SuccessFetchResponse | ErrorResponse> {
    return await axios.put(params.url, {
      ...this.headers,
      ...params.options?.headers,
    }).then(this.onSuccess).catch(this.onError);;
  }

  async delete(params: ApiServiceInterface): Promise<SuccessFetchResponse | ErrorResponse> {
    return await axios.delete(params.url, {
      ...this.headers,
      ...params.options?.headers,
    }).then(this.onSuccess).catch(this.onError);;
  }

}