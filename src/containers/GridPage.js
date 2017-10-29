import { connect } from 'react-redux'
import { fetchPhotos, selectPhoto } from '../actions'
import PhotoGrid from '../components/PhotoGrid'

/**
 * Container which connects the PhotoGrid component to Redux state.
 */

const mapStateToProps = state => {
  return {
    photo: state.photo,
    photos: state.photos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    selectPhoto: (photo) => dispatch(selectPhoto(photo))
  }
}

const GridPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid)

export default GridPage