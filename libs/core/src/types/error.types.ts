export interface ErrorResponse {
  response: {
    data: {
      errors: ErrorResponseType[];
    }
  }
}

type ErrorResponseType = {
  [id: number]: {
    code: string;
    message: string;
  }
}