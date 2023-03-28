import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'

function App () {
  return (
    <div className='App'>

      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </div>
  )
}

export default App
