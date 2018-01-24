import React from "react"
import { renderToString } from "react-dom/server"
import { createRenderer } from 'fela'
import { renderToMarkup } from 'fela-dom'

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const renderer = createRenderer()
  const bodyHTML = renderToString(bodyComponent);
  const styleMarkup = renderToMarkup(renderer)
  replaceBodyHTMLString(bodyHTML)
  setHeadComponents([styleMarkup])
}
