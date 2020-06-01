import React from 'react'
import { render } from 'react-dom'

import 'core-js/es/map'
import 'core-js/es/set'
import 'raf/polyfill'

import '@fashionista/css/index.css'

const rootComponent = React.createElement('h1', {}, 'Hello React App')
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)
