import SearchBar from './components/Navbar'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'

function App () {
  return (
    <div className='App'>

      <BrowserRouter>
        <SearchBar />
        <RoutesIndex />
      </BrowserRouter>
    </div>
  )
}

export default App
