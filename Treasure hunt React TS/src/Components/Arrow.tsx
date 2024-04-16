import { useSelector } from 'react-redux'
import { calculateArrowRotation } from '../Utils/calculateArrowRotation'
import { TreasureState } from '../Redux/Reducers/treasureReducer'

const Text: React.FC = () => {
  const treasureState = useSelector((state: TreasureState) => state.treasure)

  // direction acts like a compass
  const direction: number = calculateArrowRotation(
    treasureState.treasureCoords,
    treasureState.clickedCoords
  )
  return <img src="Arrow.png" alt={`Arrow pointing at ${direction} degrees`} />
}

export default Text
