declare let log: any;

declare module NodeJS {
  interface Global {
    log: any;
    app: any;
  }
}

declare namespace Express {
  export interface Application {
    redis?: any;
    service?: any;
    log?: any;
    use: any;
  }
}
