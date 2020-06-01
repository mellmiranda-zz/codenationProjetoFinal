import React from 'react'
import { element } from 'prop-types'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'

import reducer from './reducers'

const store = createStore(reducer, devToolsEnhancer())

const propTypes = {
  children: element.isRequired
}

export default function Store ({ children }) {
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = propTypes
