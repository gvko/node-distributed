"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = {
    'notFound': 404,
    'badRequest': 400,
    'serverError': 500,
    'unauthorized': 401,
    'forbidden': 403
};
exports.errorType = types;
/**
 * Simple wrapper of the native Node Error object to create custom errors
 *
 * @param {string}  message The message to be displayed with the error
 * @param {object}  data    Any data to be returned with the error
 * @return {Error}
 */
function default_1(message, data) {
    const error = new Error(message);
    error['data'] = data ? data : {};
    if (!data || !data.statusCode) {
        error['data'].statusCode = types['serverError'];
    }
    return error;
}
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvY3JlYXRlLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxLQUFLLEdBQUc7SUFDWixVQUFVLEVBQUUsR0FBRztJQUNmLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLGNBQWMsRUFBRSxHQUFHO0lBQ25CLFdBQVcsRUFBRSxHQUFHO0NBQ2pCLENBQUM7QUFDVyxRQUFBLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFFL0I7Ozs7OztHQU1HO0FBQ0gsbUJBQXlCLE9BQWUsRUFBRSxJQUFVO0lBQ2xELE1BQU0sS0FBSyxHQUFVLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXhDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRWpDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ2pEO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBVkQsNEJBVUMiLCJmaWxlIjoidXRpbC9jcmVhdGUtZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0eXBlcyA9IHtcbiAgJ25vdEZvdW5kJzogNDA0LFxuICAnYmFkUmVxdWVzdCc6IDQwMCxcbiAgJ3NlcnZlckVycm9yJzogNTAwLFxuICAndW5hdXRob3JpemVkJzogNDAxLFxuICAnZm9yYmlkZGVuJzogNDAzXG59O1xuZXhwb3J0IGNvbnN0IGVycm9yVHlwZSA9IHR5cGVzO1xuXG4vKipcbiAqIFNpbXBsZSB3cmFwcGVyIG9mIHRoZSBuYXRpdmUgTm9kZSBFcnJvciBvYmplY3QgdG8gY3JlYXRlIGN1c3RvbSBlcnJvcnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIHdpdGggdGhlIGVycm9yXG4gKiBAcGFyYW0ge29iamVjdH0gIGRhdGEgICAgQW55IGRhdGEgdG8gYmUgcmV0dXJuZWQgd2l0aCB0aGUgZXJyb3JcbiAqIEByZXR1cm4ge0Vycm9yfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gIGNvbnN0IGVycm9yOiBFcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcblxuICBlcnJvclsnZGF0YSddID0gZGF0YSA/IGRhdGEgOiB7fTtcblxuICBpZiAoIWRhdGEgfHwgIWRhdGEuc3RhdHVzQ29kZSkge1xuICAgIGVycm9yWydkYXRhJ10uc3RhdHVzQ29kZSA9IHR5cGVzWydzZXJ2ZXJFcnJvciddO1xuICB9XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuIl19
