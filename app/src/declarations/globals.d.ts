declare let log: any;

declare module NodeJS {
  interface Global {
    log: any;
    app: any;
  }
}

declare namespace Express {
  export interface Application {
    service?: any
    log?: any
  }

  export interface Request {
    userId?: string
  }
}
