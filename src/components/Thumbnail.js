import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = ({ id, albumId, title, url, thumbnailUrl, style }) => (
  <img src={thumbnailUrl} alt={title} />
)

Thumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  albumId: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Thumbnail