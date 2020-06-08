import React from 'react'
import { element } from 'prop-types'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import reducers from './reducers'

const store = configureStore({ reducer: reducers })

const propTypes = {
  children: element.isRequired
}

export default function Store ({ children }) {
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = propTypes
