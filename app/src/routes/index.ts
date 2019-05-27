import * as express from 'express';

const router = express.Router();

/**
 * Just a regular, everyday, normal endpoint
 */
router.get('/', (req, res) => {
  res.status(200);
  res.send('This is not the endpoint you are looking for...');
});

/**
 * Ping endpoint, to verify health of the service.
 * Mainly needed for automated monitoring tools.
 */
router.get('/ping', (req, res) => {
  res.status(418);
  res.send('pong');
});

module.exports = router;
