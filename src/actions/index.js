export const FETCH_PHOTOS = 'FETCH_PHOTOS'
export const SELECT_PHOTO = 'SELECT_PHOTO'
export const PHOTOS_FETCHED = 'PHOTOS_FETCHED'
export const FETCH_FAILED = 'FETCH_FAILED'


export const fetchPhotos = () => {
  return {
    type: FETCH_PHOTOS
  }
}

export const selectPhoto = photo => {
  return {
    type: SELECT_PHOTO,
    photo
  }
}