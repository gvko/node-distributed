import * as express from 'express';

const router = express.Router();
import * as ReservationsService from '../services/reservations-service';

/**
 * Get all reservations
 */
router.get('/', async (req, res) => {
  const eventName: string = `events:${req.query.eventName}`;

  let result;
  try {
    result = await redis.hgetallAsync(eventName);
  } catch (err) {
    log.error(err);

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

  const result: string | null = await ReservationsService.makeReservation(eventName, seatsCount);
  res.json(result);
});


module.exports = router;
