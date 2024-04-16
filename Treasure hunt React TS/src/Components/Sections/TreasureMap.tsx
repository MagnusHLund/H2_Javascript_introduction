import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTreasureCoordinates } from '../../Redux/Actions/treasureActions'
import { TreasureState } from '../../Redux/Reducers/treasureReducer'
import TreasureLocation from '../TreasureLocation'

interface ITreasureMapProps {
  className: string
}

const TreasureMap: React.FC<ITreasureMapProps> = ({ className = '' }) => {
  const dispatch = useDispatch()
  const treasureState = useSelector((state: TreasureState) => state.treasure)

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    dispatch(
      setTreasureCoordinates({
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
      })
    )
  }

  return (
    <div className={className}>
      <img src="Map.jpg" onClick={handleClick} alt="Treasure map island" />
      <TreasureLocation position={treasureState.treasureCoords} />
    </div>
  )
}

export default TreasureMap
