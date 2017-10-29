import React, { Component } from 'react'
import '../styles/App.css'
import GridPage from './GridPage'
import DetailsPage from './DetailsPage'

/**
 * Main container of the application.
 */
class App extends Component {
  render() {
    return (
      <div className="background">
        <DetailsPage />
        <GridPage />
      </div>
    )
  }
}

export default App