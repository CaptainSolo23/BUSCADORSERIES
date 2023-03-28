
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [shows, setShows] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setShows(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const filteredShows = shows.filter(show => {
    return show.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return (
    <>
      <div className='container'>
        <h1>ShowSearch</h1>

        <form className='form-inline my-2 my-lg-0 pt-3 pb-3 w-75'>
          <input type='text' className='form-control' id='search' placeholder='Enter name' value={searchTerm} onChange={handleSearch} />
        </form>
        <div className='row'>
          {filteredShows.map(show => (
            <div className='col-sm-4 mb-4' key={show.id}>
              <div className='card'>
                <img className='card-img-top' src={show.image.medium} alt={show.name} />
                <div className='card-body'>
                  <Link to={`/shows/${show.id}`}>
                    <h4 className='card-title'>{show.name}</h4>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
