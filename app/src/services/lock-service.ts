import createError from '../util/create-error';
import * as cron from 'node-cron';

let cronTask;

export async function startRecurringLocking(): Promise<void> {
  const cronJobPatternEvery30Sec: string = '*/30 * * * * *';

  log.info('Starting recurring task...');

  cronTask = cron.schedule(cronJobPatternEvery30Sec, () => {
    execLockingMechanism();
  });
}

export function stopRecurringLocking(): void {
  cronTask.stop();
}

/**
 * Perform greedy, distributed lock
 */
async function execLockingMechanism(): Promise<void> {
  let retryAttempts: number = 3;
  let lockAcquired: boolean = false;

  do {
    lockAcquired = await lock();
    retryAttempts--;
  } while (!lockAcquired && retryAttempts > 0);

  if (!lockAcquired) {
    log.warn('Lock NOT acquired!');
    return;
  }

  log.info('I got the lock!');

  await unlock();
  return;
}

async function lock(): Promise<boolean> {
  try {
    const res = await redis.setAsync('lock', process.env.SERVICE_NAME, 'EX', 30, 'NX');

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
