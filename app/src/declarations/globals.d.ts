declare let log: any;
declare let redis: any;
declare let app: any;

declare module NodeJS {
  interface Global {
    log: any;
    app: any;
    redis: any;
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
