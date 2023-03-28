import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const showDetail = () => {
  const [show, setShow] = useState(null)
  const { id } = useParams()
  const [cast, setCast] = useState([])
  const [seasons, setSeasons] = useState([])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        setShow(data)
      }).catch(error => {
        console.log(error)
      })
  }, [id])

  const imageElement = show?.image.medium
  const descElement = show?.summary

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then(response => response.json())
      .then(data => {
        setCast(data)
      }).catch(error => {
        console.log(error)
      })
  }, [id])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then(response => response.json())
      .then(data => {
        setSeasons(data)
      }).catch(error => {
        console.log(error)
      })
  }, [id])

  return (
    <div className='container mt-3 d-flex flex-column justify-content-center'>
      <div className='card d-flex justify-content-center'>
        <div className='card-header'>
          <h3>{show?.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4 pb-3 d-flex justify-content-center'>
              <img src={imageElement} alt={show?.name} className='img-fluid' />
            </div>
            <div className='col-md-8 pb-3'>
              <h3>
                Resume
              </h3>
              <>
                <div dangerouslySetInnerHTML={{ __html: descElement }} />
              </>
            </div>
            <div className='cast-continer '>
              <div className='col'>
                <h3>Cast</h3>
                <div className='row'>
                  {cast.map(star => (
                    <div className='col-sm-4 mb-4' key={star.person.id}>
                      <div className='card'>
                        <img className='card-img-top' src={star.person.image.medium} alt={star.name} />
                        <div className='card-body'>
                          <h4 className='card-title'>{star.person.name} as {star.character.name} </h4>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
            <div className='col'>

              <h3>All seasons </h3>

              <div className='row-12 season-container'>
                {seasons.map(season => (

                  <div className='col mt-4' key={season.id}>

                    <div className='row d-flex flex-row mb-4'>
                      <div className='col'><h4>Season {season.number}</h4></div>
                      <div className='col'><Link to={`/shows/${show.id}/episodes/${season.number}}`}><button className='btn btn-primary'> See episodes</button></Link></div>

                    </div>
                    <div className='row-12 d-flex flex-row justify-content-between'>

                      <div className='col-6'>
                        <img className='season' src={season.image.medium} alt={season.name} />
                      </div>

                      <div className='col-6'>
                        <div dangerouslySetInnerHTML={{ __html: season.summary }} />
                      </div>

                    </div>
                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default showDetail
