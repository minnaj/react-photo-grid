import { combineReducers } from 'redux'
import photos from './photos'
import photo from './photo'

const photoApp = combineReducers({
  photos,
  photo
})

export default photoApp