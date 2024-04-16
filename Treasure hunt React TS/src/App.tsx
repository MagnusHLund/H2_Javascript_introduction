import './App.css'
import TreasureMap from './Components/Sections/TreasureMap'
import SidePanel from './Components/Sections/SidePanel'

function App() {
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  return (
    <div
      className="container"
      style={{ width: screenWidth, height: screenHeight }}
    >
      <SidePanel className="side-panel" />
      <TreasureMap className="treasure-map" />
    </div>
  )
}

export default App
