
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Episodes = () => {
  const [season, setSeason] = useState([])
  const { seasonId } = useParams()
  const url = `https://api.tvmaze.com/seasons/${seasonId}/episodes`

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setSeason(data)
      }).catch(error => {
        console.log(error)
      })
  }, [seasonId])

  return (

    <div className='container col-12 d-flex flex-column justify-content-center'>

      <div className='episodes box'>
        <div className='row'>
          {season.map(ep => (
            <div className='col-sm-4 mb-4' key={ep.number}>
              <div className='row'>
                <img className='img' src={ep.image ? ep.image.medium : 'https://http.cat/404'} alt={ep.name} />
                <div className='body'>
                  <h4 className='title'>{ep.name}</h4>
                  <div dangerouslySetInnerHTML={{ __html: ep.summary }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='button-return btn btn-secondary'>Back</div>
    </div>
  )
}

export default Episodes
