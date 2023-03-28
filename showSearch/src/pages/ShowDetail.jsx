import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const showDetail = () => {
  const [show, setShow] = useState(null)
  const { id } = useParams()

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

  console.log(show)

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
            <div className='col-md-8'>
              <h3>Episodes</h3>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Season</th>
                    <th>Episode</th>
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
export default showDetail
