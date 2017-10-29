import React from 'react'
import PropTypes from 'prop-types'

const Photo = ({ photo }) => (
  <img src={photo.url} alt={photo.title} />
)

Photo.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    albumId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  style: PropTypes.object
}

export default Photo