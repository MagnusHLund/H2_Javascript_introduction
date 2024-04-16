import { useDispatch, useSelector } from 'react-redux'
import { coordinates } from '../../Types/coordinates'
import { setTreasureLocation } from '../Utils/setTreasureLocation'
import { TreasureState } from '../Redux/Reducers/treasureReducer'
import { setTreasureCoordinates } from '../Redux/Actions/treasureActions'
import { useEffect } from 'react'

interface ITreasureLocationProps {
  position: coordinates
  size?: string
}

const TreasureLocation: React.FC<ITreasureLocationProps> = ({
  position = { x: 0, y: 0 },
  size = '50px',
}) => {
  const dispatch = useDispatch()
  const mapSize: coordinates = useSelector(
    (state: TreasureState) => state.treasure.mapSize
  )
  useEffect(() => {
    if (position.x === 0 && position.y === 0) {
      const treasureLocation = setTreasureLocation(mapSize)
      dispatch(setTreasureCoordinates(treasureLocation))
    }
  }, [])
  return (
    <img
      src="RedCross.png"
      alt="Buried treasure location"
      style={{ height: size, width: size, left: position.x, top: position.y }}
    />
  )
}

export default TreasureLocation
