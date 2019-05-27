"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
const redis = require('async-redis');
/**
 * Initialize the Redis connection
 *
 * @param {object}  config  Object containing the Redis connection details
 */
function initRedis(config) {
    const redisClient = redis.createClient(config.redis, {
        retry_strategy: (options) => {
            if (options.error) {
                console.error(options.err);
                return new Error('Redis connection error');
            }
            /* Try to reconnect after 3 sec */
            return 3000;
        }
    });
    redisClient.on('error', (err) => {
        console.error(err);
        return err;
    });
    return redisClient;
}
exports.initRedis = initRedis;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvY29ubmVjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUEwQjs7QUFFMUIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXJDOzs7O0dBSUc7QUFDSCxTQUFnQixTQUFTLENBQUMsTUFBTTtJQUM5QixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDbkQsY0FBYyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsa0NBQWtDO1lBQ2xDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUNGLENBQUMsQ0FBQztJQUVILFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQW5CRCw4QkFtQkMiLCJmaWxlIjoidXRpbC9jb25uZWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5cbmNvbnN0IHJlZGlzID0gcmVxdWlyZSgnYXN5bmMtcmVkaXMnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBSZWRpcyBjb25uZWN0aW9uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9ICBjb25maWcgIE9iamVjdCBjb250YWluaW5nIHRoZSBSZWRpcyBjb25uZWN0aW9uIGRldGFpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRSZWRpcyhjb25maWcpIHtcbiAgY29uc3QgcmVkaXNDbGllbnQgPSByZWRpcy5jcmVhdGVDbGllbnQoY29uZmlnLnJlZGlzLCB7XG4gICAgcmV0cnlfc3RyYXRlZ3k6IChvcHRpb25zKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKG9wdGlvbnMuZXJyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVkaXMgY29ubmVjdGlvbiBlcnJvcicpO1xuICAgICAgfVxuXG4gICAgICAvKiBUcnkgdG8gcmVjb25uZWN0IGFmdGVyIDMgc2VjICovXG4gICAgICByZXR1cm4gMzAwMDtcbiAgICB9XG4gIH0pO1xuXG4gIHJlZGlzQ2xpZW50Lm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIGVycjtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZGlzQ2xpZW50O1xufVxuIl19
