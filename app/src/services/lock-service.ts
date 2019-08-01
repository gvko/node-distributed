import createError from '../util/create-error';
import * as cron from 'node-cron';

let cronTask;

export async function startRecurringLocking(): Promise<void> {
  const cronJobPatternEvery30Sec: string = '*/30 * * * * *';

  cronTask = cron.schedule(cronJobPatternEvery30Sec, () => {
    execLockingMechanism();
  });
}

export function stopRecurringLocking(): void {
  cronTask.destroy();

  log.info('Recurring task destroyed!');
}

/**
 * Perform greedy, distributed lock
 */
async function execLockingMechanism(): Promise<void> {
  let retryAttempts: number = 3;
  let lockAcquired: boolean = await lock();

  while (!lockAcquired && retryAttempts > 0) {
    await sleep(50);
    lockAcquired = await lock();
    retryAttempts--;
  }

  if (!lockAcquired) {
    log.warn('Lock NOT acquired!');
    return;
  }

  log.info('I got the lock!');

  /*
   * Wait a certain time (ms) to remove the chance of the job finishing and releasing the lock before the other
   * instances have finished trying to acquire the lock, in case the job takes too short time to execute.
   */
  await sleep(200);
  await unlock();

  return;
}

async function lock(): Promise<boolean> {
  try {
    const res = await redis.setAsync('lock', process.env.SERVICE_NAME, 'EX', 10, 'NX');

    return res === 'OK';

  } catch (err) {
    throw createError('Could not acquire lock', { err });
  }
}

async function unlock(): Promise<boolean> {
  try {
    await redis.delAsync('lock');
    return true;
  } catch (err) {
    throw createError('Could not release lock', { err })
  }
}

/**
 * Sleep the process for the given amount of time
 *
 * @param {number}  ms
 */
function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
