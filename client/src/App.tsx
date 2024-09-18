import './App.css'

import SimulationCanvas from './components/SimulationCanvas'

function App() {
  return (
    <div className="App bg-gray-800 min-h-screen w-full">
      <h1 className="text-center text-3xl font-bold py-8 text-gray-200">2D Simulation</h1>
      <SimulationCanvas />
    </div>
  )
}

export default App
