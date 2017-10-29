import React, { Component } from 'react'
import '../styles/App.css'
import GridPage from './GridPage'
import DetailsPage from './DetailsPage'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    if (this.props.photo) {
      return (
        <div className="background">
          <DetailsPage />
        </div>
      )
    }
    return (
      <div className="background">
        <GridPage />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    photo: state.photo
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp
