export interface UnexpectedError {
    kind: "UnexpectedError";
    error: Error;
}

export interface ServerError {
    kind: "ServerError";
    error: Error;
    errorCode: number;
}

export interface AuthenticationError {
    kind: "AuthenticationError";
    error: Error;
}

// export interface ErrorData {
//     message: string;
//     source:  string;
//     value:   string;
// }

// export interface ErrorFold {
//     kind: "ErrorFold",
//     error: ErrorData[],
// }

export class UnexpectedError implements Error {
    name: string;
    message: string;

    constructor(message: string) {
        this.name =  "UnexpectedError";
        this.message = message
    }    
}

export class ServerError implements Error {
    name: string;
    message: string;
    errorCode: number;

    constructor(message: string, errorCode: number) {
        this.name =  "ServerError";
        this.message = message
        this.errorCode = errorCode
    }    
}

export class ErrorData<T> implements Error {
    name: string;
    message: string;
    data: T;

    constructor(message: string, errorCode: number, data: T) {
        this.name =  "ServerError";
        this.message = message
        this.data = data
    }    
}

// export type DataError = UnexpectedError | ServerError | AuthenticationError | ErrorFold;
  
  