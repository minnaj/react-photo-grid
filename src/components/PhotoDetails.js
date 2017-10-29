import React from 'react'
import PropTypes from 'prop-types'
import Photo from './Photo'

/**
 * Component which displays a single photo and its title.
 * Hidden if user has not selected a photo.
 */

class PhotoDetails extends React.Component {
  render() {
    if (!this.props.photo) return (<div></div>)

    var photo = this.props.photo
    return (
      <div>
        <div className="grid-header">Photo details</div>
        <Photo photo={this.props.photo} />
        <p className="photo-details">
          <span className="photo-title">Title:</span> {photo.title}
        </p>
        <a onClick={() => this.props.deselectPhoto()} className="back-button">
          Back
        </a>
      </div>
    )
  }
}

PhotoDetails.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    albumId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  selectPhoto: PropTypes.func.isRequired,
  deselectPhoto: PropTypes.func.isRequired
}

export default PhotoDetails