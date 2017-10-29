import { connect } from 'react-redux'
import { selectPhoto, deselectPhoto } from '../actions'
import PhotoDetails from '../components/PhotoDetails'

const mapStateToProps = state => {
  return {
    photo: state.photo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectPhoto: (photo) => dispatch(selectPhoto(photo)),
    deselectPhoto: () => dispatch(deselectPhoto())
  }
}

const DetailsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetails)

export default DetailsPage