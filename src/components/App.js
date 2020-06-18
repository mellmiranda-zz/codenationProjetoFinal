import React from 'react'

import { CatalogProvider } from '@fashionista/components/contexts'
import '@fashionista/css/index.css'

export default function App () {
  return (
    <CatalogProvider>
      <h1>Hello React App</h1>
    </CatalogProvider>
  )
}
