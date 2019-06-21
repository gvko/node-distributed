/* istanbul ignore file */

/**
 * Handles the errors that are to be returned as a response from the API.
 *
 * Constructs custom error object out of the original one and logs it, before it is returned to the client.
 *
 * @param err
 * @param req
 * @param res
 * @param next
 */
export default function (err, req, res, next) {
  const statusCode: number = err.data && err.data.statusCode ? err.data.statusCode : 500;

  const error = {
    message: err.message,
    data: err.data
  };

  /*
   * Bunyan (the logging library in use) filters objects from redundant data. The error stack trace is being filtered,
   * if passed as an object. That's why we strip it out as an array of strings.
   * We only send the stack trace to the logs, but not in the response to the client.
   */
  const stack = err.stack !== undefined ? err.stack.toString().split('\n') : undefined;

  log.error({ error, stack }, err.message);

  res.status(statusCode);
  res.json(error);
}
