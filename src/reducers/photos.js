import {
  PHOTOS_FETCHED
} from '../actions'

/**
 * Reducer which saves the retrieved photos to Redux state.
 */

const photos = (state = [], action) => {
  switch (action.type) {
    case PHOTOS_FETCHED:
      return action.data
    default:
      return state
  }
}

export default photos