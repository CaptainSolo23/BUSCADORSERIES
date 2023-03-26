
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ShowDetail = () => {
  const [show, setShow] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setShow(data)
      }).catch(error => {
        console.log(error)
      })
  }, [id])

  const imageMap = show?.image
    ? {
        original: show.image.original,
        medium: show.image.medium
      }
    : null

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{show?.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={imageMap.medium} alt={show?.name} className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <></>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShowDetail
