export class UnexpectedError extends Error {
    constructor(message: string) {
        super(message);
        this.name =  "UnexpectedError";
    }    
}

export class ServerError extends Error {
    public readonly errorCode: number;

    constructor(message: string, errorCode: number) {
        super(message);
        this.name =  "ServerError";
        this.errorCode = errorCode;
    }    
}

export class AuthenticationError extends Error {
    constructor(message: string) {
        super(message)
        this.name =  "AuthenticationError";
    }    
}
interface ErrorData {
    message: string;
    source:  string;
    value:   string;
}

export class ErrorFold extends Error {
    public readonly errorData: ErrorData[];

    constructor(message: string, errorData: ErrorData[]) {
        super(message);
        this.name =  "ErrorFold";
        this.errorData = errorData;
    }    
}
  
  