import SearchBar from './components/Navbar'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import Home from './pages/Home'

function App () {
  return (
    <div className='App'>

      <BrowserRouter>
        <SearchBar />
        <Home />
        <RoutesIndex />
      </BrowserRouter>
    </div>
  )
}

export default App
