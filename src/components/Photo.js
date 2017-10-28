import React from 'react'
import PropTypes from 'prop-types'

const Photo = ({ id, albumId, title, url, style }) => (
  <img src={url} alt={title} />
)

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  albumId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Photo