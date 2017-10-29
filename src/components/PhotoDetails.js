import React from 'react'
import PropTypes from 'prop-types'
import Photo from './Photo'

class PhotoDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.photo) {
      return (<p>No photo selected</p>)
    }
    var photo = this.props.photo
    return (
      <div>
        <Photo photo={this.props.photo} />
        <p>{photo.title}</p>
        <a onClick={() => this.props.deselectPhoto()}>
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