import React from 'react'
import { Router } from 'react-router-dom'
import { rehydrate } from 'fela-dom'
import { Provider } from 'react-fela'
import { createRenderer } from 'fela'


exports.replaceRouterComponent = ({ history }) => {
  const renderer = createRenderer()
  rehydrate(renderer)
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider renderer={renderer}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}