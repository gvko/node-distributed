"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
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
function default_1(err, req, res, next) {
    const statusCode = err.data.statusCode ? err.data.statusCode : 500;
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
    req.app.log.error({ error, stack }, err.message);
    res.status(statusCode);
    res.json(error);
}
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL2NhdGNoLWFuZC1sb2ctZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBMEI7O0FBRTFCOzs7Ozs7Ozs7R0FTRztBQUNILG1CQUF5QixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQzFDLE1BQU0sVUFBVSxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBRTNFLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1FBQ3BCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtLQUNmLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFFckYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVqRCxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQW5CRCw0QkFtQkMiLCJmaWxlIjoibWlkZGxld2FyZXMvY2F0Y2gtYW5kLWxvZy1lcnJvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuXG4vKipcbiAqIEhhbmRsZXMgdGhlIGVycm9ycyB0aGF0IGFyZSB0byBiZSByZXR1cm5lZCBhcyBhIHJlc3BvbnNlIGZyb20gdGhlIEFQSS5cbiAqXG4gKiBDb25zdHJ1Y3RzIGN1c3RvbSBlcnJvciBvYmplY3Qgb3V0IG9mIHRoZSBvcmlnaW5hbCBvbmUgYW5kIGxvZ3MgaXQsIGJlZm9yZSBpdCBpcyByZXR1cm5lZCB0byB0aGUgY2xpZW50LlxuICpcbiAqIEBwYXJhbSBlcnJcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqIEBwYXJhbSBuZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XG4gIGNvbnN0IHN0YXR1c0NvZGU6IG51bWJlciA9IGVyci5kYXRhLnN0YXR1c0NvZGUgPyBlcnIuZGF0YS5zdGF0dXNDb2RlIDogNTAwO1xuXG4gIGNvbnN0IGVycm9yID0ge1xuICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgIGRhdGE6IGVyci5kYXRhXG4gIH07XG5cbiAgLypcbiAgICogQnVueWFuICh0aGUgbG9nZ2luZyBsaWJyYXJ5IGluIHVzZSkgZmlsdGVycyBvYmplY3RzIGZyb20gcmVkdW5kYW50IGRhdGEuIFRoZSBlcnJvciBzdGFjayB0cmFjZSBpcyBiZWluZyBmaWx0ZXJlZCxcbiAgICogaWYgcGFzc2VkIGFzIGFuIG9iamVjdC4gVGhhdCdzIHdoeSB3ZSBzdHJpcCBpdCBvdXQgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAgICogV2Ugb25seSBzZW5kIHRoZSBzdGFjayB0cmFjZSB0byB0aGUgbG9ncywgYnV0IG5vdCBpbiB0aGUgcmVzcG9uc2UgdG8gdGhlIGNsaWVudC5cbiAgICovXG4gIGNvbnN0IHN0YWNrID0gZXJyLnN0YWNrICE9PSB1bmRlZmluZWQgPyBlcnIuc3RhY2sudG9TdHJpbmcoKS5zcGxpdCgnXFxuJykgOiB1bmRlZmluZWQ7XG5cbiAgcmVxLmFwcC5sb2cuZXJyb3IoeyBlcnJvciwgc3RhY2sgfSwgZXJyLm1lc3NhZ2UpO1xuXG4gIHJlcy5zdGF0dXMoc3RhdHVzQ29kZSk7XG4gIHJlcy5qc29uKGVycm9yKTtcbn1cbiJdfQ==
