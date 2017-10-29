import {
  FETCH_PHOTOS,
  PHOTOS_FETCHED
} from '../actions'

const photos = (state = [], action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return state
    case PHOTOS_FETCHED:
      return action.data
    default:
      return state
  }
}

export default photos