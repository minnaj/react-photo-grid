import {
  SELECT_PHOTO,
  DESELECT_PHOTO
} from '../actions'

/**
 * Reducer which sets the selected photo.
 */

const photo = (state = null, action) => {
  switch (action.type) {
    case SELECT_PHOTO:
      return action.photo
    case DESELECT_PHOTO:
      return null
    default:
      return state
  }
}

export default photo