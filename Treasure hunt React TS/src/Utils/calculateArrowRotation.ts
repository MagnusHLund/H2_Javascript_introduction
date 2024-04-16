import { coordinates } from '../../Types/coordinates'
export function calculateArrowRotation(
  treasureLocation: coordinates,
  clickLocation: coordinates
): number {
  const y = clickLocation.y - treasureLocation.y
  const x = clickLocation.x - treasureLocation.y
  let degrees = Math.atan2(y, x)
  degrees *= 180 / Math.PI
  return degrees
}
