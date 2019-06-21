import * as express from 'express';

const router = express.Router();
import * as ReservationsService from '../services/reservations-service';

/**
 * Get all reservations
 */
router.get('/', async (req, res, next) => {
  const eventName: string = `events:${req.query.eventName}`;

  try {
    const result = await ReservationsService.getEventDetails(eventName);
    res.json(result);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

/**
 * Get a particular reservation by ID
 */
router.get('/:reservationId', async (req, res, next) => {

});

/**
 * Reserve a seat
 */
router.post('/', async (req, res, next) => {
  const eventName: string = `events:${req.body.eventName}`;
  const seatsCount: number = req.body.seatsCount;

  try {
    const result: string | null = await ReservationsService.makeReservation(eventName, seatsCount);
    res.json(result);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});


module.exports = router;
