"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
/**
 * Get all reservations
 */
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const result = yield req.app.redis.hgetall('reservations:asdf');
    res.json(result);
}));
/**
 * Get a particular reservation by ID
 */
router.get('/:reservationId', (req, res) => __awaiter(this, void 0, void 0, function* () {
}));
/**
 * Reserve a seat
 */
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const eventName = req.body.eventName;
    const seatsCount = req.body.seatsCount;
    const result = yield req.app.redis.hset(`events:${eventName}`, 'seats', 5);
    res.json(result);
}));
module.exports = router;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9yZXNlcnZhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUVuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEM7O0dBRUc7QUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRWhFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUVqRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNsQyxNQUFNLFNBQVMsR0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxNQUFNLFVBQVUsR0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUUvQyxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUzRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJyb3V0ZXMvcmVzZXJ2YXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyoqXG4gKiBHZXQgYWxsIHJlc2VydmF0aW9uc1xuICovXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcS5hcHAucmVkaXMuaGdldGFsbCgncmVzZXJ2YXRpb25zOmFzZGYnKTtcblxuICByZXMuanNvbihyZXN1bHQpO1xufSk7XG5cbi8qKlxuICogR2V0IGEgcGFydGljdWxhciByZXNlcnZhdGlvbiBieSBJRFxuICovXG5yb3V0ZXIuZ2V0KCcvOnJlc2VydmF0aW9uSWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcblxufSk7XG5cbi8qKlxuICogUmVzZXJ2ZSBhIHNlYXRcbiAqL1xucm91dGVyLnBvc3QoJy8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPSByZXEuYm9keS5ldmVudE5hbWU7XG4gIGNvbnN0IHNlYXRzQ291bnQ6IG51bWJlciA9IHJlcS5ib2R5LnNlYXRzQ291bnQ7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxLmFwcC5yZWRpcy5oc2V0KGBldmVudHM6JHtldmVudE5hbWV9YCwgJ3NlYXRzJywgNSk7XG5cbiAgcmVzLmpzb24ocmVzdWx0KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiJdfQ==
