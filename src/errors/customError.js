// GENERIC
export class MakeError extends Error {
  constructor(options) {
    super(options.message || "GENERIC MESSAGE");
    this.name    = options.name || "GENERIC ERROR";
    options.cause && (this.message = this.message + `\n CAUSE: ${options.cause || "GENERIC CAUSE"}`)
  }
} // need name, message and cause

// DEFAULT
export default class CustomError extends MakeError {
  constructor(message, cause ) {
    super({
      name: "Server Error",
      message,
      cause
    });
  }
}

// DATA
export class InvalidFieldError extends MakeError {
  constructor(cause) {
    super({
      name: "DATA:_INVALID_FIELD_ERROR",
      message: "Missing or invalid fields entered",
      cause: cause
    });
  }
}

// USER
export class UserError extends MakeError {
  constructor(cause) {
    super({
      name: "USER:_USER_ERROR",
      message: "An error occurred in the user service",
      cause: cause
    });
  }
}