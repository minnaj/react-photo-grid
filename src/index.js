import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import photoApp from './reducers'
import App from './containers/App'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  photoApp,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
const action = type => store.dispatch({type})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)