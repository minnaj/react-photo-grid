import {
  FETCH_PHOTOS,
  SELECT_PHOTO,
  PHOTOS_FETCHED,
  FETCH_FAILED
} from '../actions'

const photos = (state = [], action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return state
    case PHOTOS_FETCHED:
      return action.data
    case SELECT_PHOTO:
      return state
    default:
      return state
  }
}

export default photos