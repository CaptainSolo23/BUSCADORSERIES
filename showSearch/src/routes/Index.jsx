import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ShowDetail from '../pages/ShowDetail'
import About from '../pages/About'
import Episodes from '../pages/Episodes'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shows/:id' element={<ShowDetail />} />
      <Route path='/about' element={<About />} />
      <Route path='/shows/:id/episodes/:season' element={<Episodes />} />

    </Routes>
  )
}

export default RoutesIndex
