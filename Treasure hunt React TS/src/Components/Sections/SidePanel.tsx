import Text from '../Text'

interface ITreassureLocationProps {
  className?: string
}

const SidePanel: React.FC<ITreassureLocationProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <Text textValue="Attempts left: 5" />
      <Text textValue="Treasure is to the left and up" />
      <Text textValue="You have found x chests" />
      <Text textValue="You have earned x money" />
    </div>
  )
}

export default SidePanel
