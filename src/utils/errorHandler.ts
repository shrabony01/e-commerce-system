// Implement a custom error class and functions to handle different types of errors gracefully.
export class AppError extends Error{
    public statusCode:number;

    constructor (message:string,statusCode:number=500){
        super(message);
        this.name='AppError';
        this.statusCode =statusCode;

        Object.setPrototypeOf(this,AppError.prototype);
    }
}

export function handleError(error: unknown): void {
  if (error instanceof AppError) {
    console.error(`[AppError ${error.statusCode}]: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`[Standard Error]: ${error.message}`);
  } else {
    console.error("[Unknown Error]: An unexpected issue occurred.", error);
  }
}