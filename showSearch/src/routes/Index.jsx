import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ShowDetail from '../pages/ShowDetail'
import About from '../pages/About'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shows/:id' element={<ShowDetail />} />
      <Route path='/about' element={<About />} />

    </Routes>
  )
}

export default RoutesIndex
