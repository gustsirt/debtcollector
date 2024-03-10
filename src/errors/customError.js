export default class CustomError extends Error {
  constructor(message, cause = null) {
    super(message);
    this.name    = "SERVER_ERROR";
    cause && (this.message = this.message + `\CAUSE: ${cause}`)
  }
}

// DATA
export class InvalidFieldError extends Error {
  constructor(cause) {
    super("Missing or invalid fields entered");
    this.name    = "DATA:_INVALID_FIELD_ERROR";
    options.cause && (this.message = this.message + `\CAUSE: ${options.cause}`)
  }
}