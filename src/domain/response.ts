import { Code, Status } from '../enum';

class HttpResponse {
  private timeStamp: string;
  constructor(
    private statusCode: Code,
    private httpStatus: Status,
    private message: string,
    private data?: {}
  ) {
    this.timeStamp = new Date().toLocaleString();
    this.httpStatus = httpStatus;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export { HttpResponse };
