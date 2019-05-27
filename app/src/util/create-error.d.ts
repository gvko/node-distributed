export declare const errorType: {
    'notFound': number;
    'badRequest': number;
    'serverError': number;
    'unauthorized': number;
    'forbidden': number;
};
/**
 * Simple wrapper of the native Node Error object to create custom errors
 *
 * @param {string}  message The message to be displayed with the error
 * @param {object}  data    Any data to be returned with the error
 * @return {Error}
 */
export default function (message: string, data?: any): Error;
