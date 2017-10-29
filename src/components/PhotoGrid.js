import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'

/**
 * Component which displays 30 first photos received from the API.
 * Hidden if user has selected a photo.
 */

class PhotoGrid extends React.Component {
  componentWillMount() {
    this.props.fetchPhotos()
  }

  render() {
    if (this.props.photo) return (<div></div>)
    
    if (!this.props.photos) {
      return (<p>Loading...</p>)
    }

    var photoArray = this.props.photos.slice(0, 30)
    return (
      <div>
        <div className="grid-header">React album</div>
        <ul className="photo-grid">
          {photoArray.map((photo, index) => {
            return (
              <Thumbnail 
                key={index}
                photo={photo} 
                onClick={() => this.props.selectPhoto(photo)} />
              )
          })}
        </ul>
      </div>
    )
  }
}

PhotoGrid.propTypes = {
  photo: PropTypes.object,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      albumId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      style: PropTypes.object
    }).isRequired
  ),
  fetchPhotos: PropTypes.func.isRequired,
  selectPhoto: PropTypes.func.isRequired,
}

export default PhotoGrid