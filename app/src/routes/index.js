"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
/**
 * Just a regular, everyday, normal endpoint
 */
router.get('/', (req, res) => {
    req.app.log.info({
        params: req.body
    }, `Incoming request: ${req.baseUrl}`);
    res.status(200);
    res.send('This is not the endpoint you are looking for...');
});
/**
 * Ping endpoint, to verify health of the service.
 * Mainly needed for automated monitoring tools.
 */
router.get('/ping', (req, res) => {
    req.app.log.info({
        params: req.body
    }, `Incoming request: ${req.baseUrl}`);
    res.status(418);
    res.send('pong');
});
module.exports = router;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUVuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEM7O0dBRUc7QUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDZixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7S0FDakIsRUFBRSxxQkFBcUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFdkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDLENBQUM7QUFFSDs7O0dBR0c7QUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDZixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7S0FDakIsRUFBRSxxQkFBcUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFdkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyoqXG4gKiBKdXN0IGEgcmVndWxhciwgZXZlcnlkYXksIG5vcm1hbCBlbmRwb2ludFxuICovXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcS5hcHAubG9nLmluZm8oe1xuICAgIHBhcmFtczogcmVxLmJvZHlcbiAgfSwgYEluY29taW5nIHJlcXVlc3Q6ICR7cmVxLmJhc2VVcmx9YCk7XG5cbiAgcmVzLnN0YXR1cygyMDApO1xuICByZXMuc2VuZCgnVGhpcyBpcyBub3QgdGhlIGVuZHBvaW50IHlvdSBhcmUgbG9va2luZyBmb3IuLi4nKTtcbn0pO1xuXG4vKipcbiAqIFBpbmcgZW5kcG9pbnQsIHRvIHZlcmlmeSBoZWFsdGggb2YgdGhlIHNlcnZpY2UuXG4gKiBNYWlubHkgbmVlZGVkIGZvciBhdXRvbWF0ZWQgbW9uaXRvcmluZyB0b29scy5cbiAqL1xucm91dGVyLmdldCgnL3BpbmcnLCAocmVxLCByZXMpID0+IHtcbiAgcmVxLmFwcC5sb2cuaW5mbyh7XG4gICAgcGFyYW1zOiByZXEuYm9keVxuICB9LCBgSW5jb21pbmcgcmVxdWVzdDogJHtyZXEuYmFzZVVybH1gKTtcblxuICByZXMuc3RhdHVzKDQxOCk7XG4gIHJlcy5zZW5kKCdwb25nJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=
