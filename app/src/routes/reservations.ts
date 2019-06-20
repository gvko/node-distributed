import * as express from 'express';

const router = express.Router();

/**
 * Get all reservations
 */
router.get('/', async (req, res) => {
  const eventName: string = `events:${req.query.eventName}`;

  let result;
  try {
    result = await req.app.redis.hgetall(eventName);
  } catch (err) {
    req.app.log.error(err);

    res.status(500);
    return res.json(err);
  }

  res.json(result);
});

/**
 * Get a particular reservation by ID
 */
router.get('/:reservationId', async (req, res) => {

});

/**
 * Reserve a seat
 */
router.post('/', async (req, res) => {
  const eventName: string = `events:${req.body.eventName}`;
  const seatsCount: number = req.body.seatsCount;

  await req.app.redis.watch(eventName);

  let result;
  try {
    result = await req.app.redis.multi()
      .hincrby(eventName, 'available', -seatsCount)
      .exec();
  } catch (err) {
    req.app.log.error(err);

    res.status(500);
    return res.json(err);
  }

  res.json(result);
});

module.exports = router;
