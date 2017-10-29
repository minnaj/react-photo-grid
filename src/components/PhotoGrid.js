import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'
import { selectPhoto } from '../actions'

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchPhotos()
  }

  render() {
    if (!this.props.photos) {
      return (<ul></ul>)
    }
    var photoArray = this.props.photos.slice(0, 30)
    return (
      <ul>
        {photoArray.map((photo, index) => {
          return (
            <Thumbnail 
              key={index}
              photo={photo} 
              onClick={() => this.props.selectPhoto(photo)} />
            )
        })}
      </ul>
    )
  }
}

PhotoGrid.propTypes = {
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
  selectPhoto: PropTypes.func.isRequired
}

export default PhotoGrid