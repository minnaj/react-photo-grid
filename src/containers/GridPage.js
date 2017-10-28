import { connect } from 'react-redux'
import { fetchPhotos, selectPhoto } from '../actions'
import PhotoGrid from '../components/PhotoGrid'

const mapStateToProps = state => {
  return {
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