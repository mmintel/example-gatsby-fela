import React from 'react'
import { Router } from 'react-router-dom'
import { rehydrate } from 'fela-dom'
import { Provider } from 'react-fela'
import { createRenderer } from 'fela'

exports.wrapRootComponent = ({ Root }, pluginOptions) => {
  let config;
  try {
    config = require(`./fela.config.js`)
  } catch (e) {
    console.log(e)
  }
  const renderer = createRenderer(config)
  rehydrate(renderer)
  const wrappedRootComponent = ({ children }) => (
    <Provider renderer={renderer}>
      <Root />
    </Provider>
  )

  return wrappedRootComponent
}
