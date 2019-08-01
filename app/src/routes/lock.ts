import * as express from 'express';

const router = express.Router();
import * as LockService from '../services/lock-service';

/**
 * Starts recurring distributed lock mechanism task
 */
router.post('/start', async (req, res, next) => {
  try {
    log.info('Starting recurring task...');
    const result = await LockService.startRecurringLocking();

    res.json(result);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

/**
 * Stops recurring distributed lock mechanism task
 */
router.post('/stop', async (req, res, next) => {
  try {
    LockService.stopRecurringLocking();

    res.json();
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = router;
