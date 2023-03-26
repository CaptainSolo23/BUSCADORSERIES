import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ShowDetail from '../pages/ShowDetail'

const Index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shows/:id' element={<ShowDetail />} />
    </Routes>
  )
}

export default Index
