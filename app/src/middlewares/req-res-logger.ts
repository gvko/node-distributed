/* istanbul ignore file */

import * as uuid from 'uuid/v4';

/**
 * Logs every request and response of the API
 */
export default function (req, res, next) {
  const method: string = req.method;
  const url: string = req.url;
  const remoteAddress: string = req.headers['x-forwarded-for'] || req.connection.remoteAdress;
  const start: number = Date.now();

  req['requestId'] = req.headers['x-request-id'] || uuid();

  const headersToLog: any = Object.assign({}, req.headers);

  req.app.log.info({
    subModule: 'req-res-logger',
    method,
    url,
    remoteAddress,
    requestId: req.requestId,
    headers: headersToLog,
  }, 'Incoming request');

  res.on('finish', () => {
    res.app.log.info({
      subModule: 'req-res-logger',
      method,
      url,
      remoteAddress,
      requestId: req.requestId,
      status: res.statusCode,
      duration: `${Date.now() - start} ms`,
      headers: res.headers,
      body: res.data
    }, 'Outgoing response');
  });

  next();
}
