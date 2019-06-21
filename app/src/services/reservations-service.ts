/**
 * Return the data about the specific event
 *
 * @param eventName
 */
export async function getEventDetails(eventName: string) {
  try {
    return await redis.hgetallAsync(eventName);
  } catch (err) {
    throw err;
  }
}

/**
 * Setup a WATCH on an event key and attempt to make a reservation.
 * If a different client makes a reservation in the meantime (modifies the event), then the transaction will be
 * rejected and `null` will be returned.
 *
 * @param eventName
 * @param seatsCount
 * @param timeout
 */
export async function makeReservation(eventName: string, seatsCount: number, timeout?: number): Promise<string | null> {
  await redis.watchAsync(eventName);

  try {
    const available: string = await redis.hgetAsync(eventName, 'available');

    if (seatsCount > +available) {
      throw new Error(`Requested ${seatsCount} seats are more than the Available ${available}.`);
    }
    const result = await redis.multi()
      .hincrby(eventName, 'available', -seatsCount)
      .execAsync();

    return result === null ? null : result[0];
  } catch (err) {
    throw err;
  }
}

