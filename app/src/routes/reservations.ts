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

  if (req.body.timeout) {
    setTimeout(async () => {
      result = await makeReservation(req.app.redis, eventName, seatsCount);
    }, 10000);
  } else {
    result = await makeReservation(req.app.redis, eventName, seatsCount);
  }

  res.json(result);
});

async function makeReservation(redis, eventName: string, seatsCount: number) {
  try {
    return await redis.multi()
      .hincrby(eventName, 'available', -seatsCount)
      .exec();
  } catch (err) {
    throw err;
  }
}

module.exports = router;
