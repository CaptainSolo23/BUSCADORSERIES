
import { useParams, useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (

    <div className='container col-12 d-flex flex-column justify-content-center'>

      <div className='episodes box'>
        <div className='row'>
          {season.map(ep => (
            <div className='col-sm-4 mb-4' key={ep.number}>
              <div className='row'>
                <img className='img' src={ep.image ? ep.image.medium : 'https://http.cat/404'} alt={ep.name} />
                <div className='body'>
                  <h4 className='title pt-2 pb-2 bg-primary px-2 text-white'>{ep.number}. {ep.name}</h4>
                  <div dangerouslySetInnerHTML={{ __html: ep.summary }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='button-return btn btn-secondary my-4' onClick={goBack}>Back</div>
    </div>
  )
}

export default Episodes
