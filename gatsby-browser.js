import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-fela'
import { createRenderer } from 'fela'

const renderer = createRenderer()

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider renderer={renderer}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
