"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUVuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEM7O0dBRUc7QUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaURBQWlELENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUMsQ0FBQztBQUVIOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6InJvdXRlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qKlxuICogSnVzdCBhIHJlZ3VsYXIsIGV2ZXJ5ZGF5LCBub3JtYWwgZW5kcG9pbnRcbiAqL1xucm91dGVyLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzKDIwMCk7XG4gIHJlcy5zZW5kKCdUaGlzIGlzIG5vdCB0aGUgZW5kcG9pbnQgeW91IGFyZSBsb29raW5nIGZvci4uLicpO1xufSk7XG5cbi8qKlxuICogUGluZyBlbmRwb2ludCwgdG8gdmVyaWZ5IGhlYWx0aCBvZiB0aGUgc2VydmljZS5cbiAqIE1haW5seSBuZWVkZWQgZm9yIGF1dG9tYXRlZCBtb25pdG9yaW5nIHRvb2xzLlxuICovXG5yb3V0ZXIuZ2V0KCcvcGluZycsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzKDQxOCk7XG4gIHJlcy5zZW5kKCdwb25nJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=
