import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = ({ photo, onClick }) => (
  <img 
    className="thumbnail"
    src={photo.thumbnailUrl} 
    alt={photo.title} 
    onClick={onClick} />
)

Thumbnail.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    albumId: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string.isRequired
  }).isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired
}

export default Thumbnail