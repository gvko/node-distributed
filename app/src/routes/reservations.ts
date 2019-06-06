import * as express from 'express';

const router = express.Router();

/**
 * Get all reservations
 */
router.get('/', async (req, res) => {
  const result = await req.app.redis.hgetall('reservations:asdf');

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
  const eventName: string = req.body.eventName;
  const seatsCount: number = req.body.seatsCount;

  const result = await req.app.redis.hincrby(`events:${eventName}`, 'available', -seatsCount);

  res.json(result);
});

module.exports = router;
