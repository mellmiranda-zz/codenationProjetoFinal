import React from 'react'
import { render } from 'react-dom'

import 'core-js/es/map'
import 'core-js/es/set'
import 'raf/polyfill'

import App from '@fashionista/containers/App/App'
import Store from '@fashionista/store'

const rootComponent = (
  <Store>
    <App />
  </Store>
)
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)
