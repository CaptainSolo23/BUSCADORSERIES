
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Episodes = () => {
  const [season, setSeason] = useState([])
  const { id, seasonId } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/episodes?=${seasonId}`)
      .then(response => response.json())
      .then(data => {
        setSeason(data)
      }).catch(error => {
        console.log(error)
      })
  }, [id, seasonId])

  return (
    <div className='container col-12 d-flex flex-column justify-content-center'>
      <div className='episodes box'>
        <div className='row'>
          {season.map(ep => (
            <div className='col-sm-4 mb-4' key={ep.id}>
              <div className='card'>
                <img className='card-img-top' src={ep.image.medium} alt={ep.name} />
                <div className='card-body'>
                  <h4 className='card-title'>{ep.name}</h4>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Episodes
