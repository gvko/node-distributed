import * as express from 'express';

const router = express.Router();
import * as LockService from '../services/lock-service';

/**
 * Perform greedy, distributed lock
 */
router.get('/', async (req, res, next) => {
  try {
    const result = await LockService.exec();
    res.json(result);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});


module.exports = router;
