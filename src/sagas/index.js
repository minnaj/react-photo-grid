import { call, put, fork, take } from 'redux-saga/effects'
import {
  PHOTOS_FETCHED,
  FETCH_FAILED,
  FETCH_PHOTOS
} from '../actions'

function fetchPhotosApi() {
  return fetch('http://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.log(error)
    })
}

export function* fetchPhotos(action) {
  while(true) {
    yield take(FETCH_PHOTOS)
    try {
      const data = yield call(fetchPhotosApi)
      yield put({ type: PHOTOS_FETCHED, data })
    } catch (error) {
      yield put({ type: FETCH_FAILED, error })
    }
  }
}

export default function* root() {
  yield fork(fetchPhotos)
}