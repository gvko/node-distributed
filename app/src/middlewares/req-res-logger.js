"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid/v4");
/**
 * Logs every request and response of the API
 */
function default_1(req, res, next) {
    const method = req.method;
    const url = req.url;
    const remoteAddress = req.headers['x-forwarded-for'] || req.connection.remoteAdress;
    const start = Date.now();
    req['requestId'] = req.headers['x-request-id'] || uuid();
    const headersToLog = Object.assign({}, req.headers);
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
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL3JlcS1yZXMtbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBMEI7O0FBRTFCLGdDQUFnQztBQUVoQzs7R0FFRztBQUNILG1CQUF5QixHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDckMsTUFBTSxNQUFNLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxNQUFNLEdBQUcsR0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQzVCLE1BQU0sYUFBYSxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztJQUM1RixNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFakMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFFekQsTUFBTSxZQUFZLEdBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXpELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNmLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsTUFBTTtRQUNOLEdBQUc7UUFDSCxhQUFhO1FBQ2IsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO1FBQ3hCLE9BQU8sRUFBRSxZQUFZO0tBQ3RCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUV2QixHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ2YsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixNQUFNO1lBQ04sR0FBRztZQUNILGFBQWE7WUFDYixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7WUFDeEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQ3RCLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLEtBQUs7WUFDcEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3BCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtTQUNmLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQWxDRCw0QkFrQ0MiLCJmaWxlIjoibWlkZGxld2FyZXMvcmVxLXJlcy1sb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuXG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gJ3V1aWQvdjQnO1xuXG4vKipcbiAqIExvZ3MgZXZlcnkgcmVxdWVzdCBhbmQgcmVzcG9uc2Ugb2YgdGhlIEFQSVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgY29uc3QgbWV0aG9kOiBzdHJpbmcgPSByZXEubWV0aG9kO1xuICBjb25zdCB1cmw6IHN0cmluZyA9IHJlcS51cmw7XG4gIGNvbnN0IHJlbW90ZUFkZHJlc3M6IHN0cmluZyA9IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1mb3InXSB8fCByZXEuY29ubmVjdGlvbi5yZW1vdGVBZHJlc3M7XG4gIGNvbnN0IHN0YXJ0OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gIHJlcVsncmVxdWVzdElkJ10gPSByZXEuaGVhZGVyc1sneC1yZXF1ZXN0LWlkJ10gfHwgdXVpZCgpO1xuXG4gIGNvbnN0IGhlYWRlcnNUb0xvZzogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxLmhlYWRlcnMpO1xuXG4gIHJlcS5hcHAubG9nLmluZm8oe1xuICAgIHN1Yk1vZHVsZTogJ3JlcS1yZXMtbG9nZ2VyJyxcbiAgICBtZXRob2QsXG4gICAgdXJsLFxuICAgIHJlbW90ZUFkZHJlc3MsXG4gICAgcmVxdWVzdElkOiByZXEucmVxdWVzdElkLFxuICAgIGhlYWRlcnM6IGhlYWRlcnNUb0xvZyxcbiAgfSwgJ0luY29taW5nIHJlcXVlc3QnKTtcblxuICByZXMub24oJ2ZpbmlzaCcsICgpID0+IHtcbiAgICByZXMuYXBwLmxvZy5pbmZvKHtcbiAgICAgIHN1Yk1vZHVsZTogJ3JlcS1yZXMtbG9nZ2VyJyxcbiAgICAgIG1ldGhvZCxcbiAgICAgIHVybCxcbiAgICAgIHJlbW90ZUFkZHJlc3MsXG4gICAgICByZXF1ZXN0SWQ6IHJlcS5yZXF1ZXN0SWQsXG4gICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuICAgICAgZHVyYXRpb246IGAke0RhdGUubm93KCkgLSBzdGFydH0gbXNgLFxuICAgICAgaGVhZGVyczogcmVzLmhlYWRlcnMsXG4gICAgICBib2R5OiByZXMuZGF0YVxuICAgIH0sICdPdXRnb2luZyByZXNwb25zZScpO1xuICB9KTtcblxuICBuZXh0KCk7XG59XG4iXX0=
