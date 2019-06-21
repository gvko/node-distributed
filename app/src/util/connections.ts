/* istanbul ignore file */

// const redis = require('async-redis');
const redis = require('redis');
const bluebird = require('bluebird');

/**
 * Initialize the Redis connection
 *
 * @param {object}  config  Object containing the Redis connection details
 */
export function initRedis(config) {
  bluebird.promisifyAll(redis.RedisClient.prototype);
  bluebird.promisifyAll(redis.Multi.prototype);

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
