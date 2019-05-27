#!/usr/bin/env node
/* istanbul ignore file */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import logger from 'node-logger-bunyan';
import errorHandler from './middlewares/catch-and-log-errors';
import reqResLogger from './middlewares/req-res-logger';

/*
 * If production env, then load the config file with the values from the environment variables provided to the container.
 * Otherwise just load the local config file for the current environment.
 */
let config = require(`../config/${process.env.NODE_ENV.toLowerCase()}.json`);
if (process.env.NODE_ENV === 'production') {
  let configStringified: string = JSON.stringify(config);

  Object.keys(process.env).forEach(key => {
    configStringified = configStringified.replace(key, process.env[key]);
  });

  config = JSON.parse(configStringified);
  console.log(config);
}

const connections = require('./util/connections');
const indexRouter = require('./routes/index');
const reservationsRouter = require('./routes/reservations');

const app = express();
const port = process.env.PORT || '3000';
const serviceName: string = process.env.SERVICE_NAME || process.env.HOSTNAME;

/*
 * Initialize the logger before anything else, so we can use it in middleware, etc.
 */
const logInTestEnv: boolean = process.env.LOG_TEST_ENV && process.env.LOG_TEST_ENV === 'true';
app['log'] = logger(serviceName, { logInTestEnv });

app
  .use(bodyParser.json())
  .options('*', cors())
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  /*
   * Request-Response Logger
   */
  .use(reqResLogger)
  /*
   * Routes
   */
  .use('/', indexRouter)
  .use('/reservations', reservationsRouter)
  /*
   * Error handler
   */
  .use(errorHandler);

/*
 * Set some of the initialized config and connections as properties of the app object, so that they are
 * accessible anywhere across the app
 */
app['config'] = config;
app['redis'] = connections.initRedis(config);
app['service'] = {};

/*
 * Start the service
 */
app.listen(port, () => {
  app.log.info(`Server started on port ${port} (container exposed: ${process.env.EXPOSED_PORT})`);
});

export default app;
