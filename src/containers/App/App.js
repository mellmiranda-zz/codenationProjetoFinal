import React from 'react'

import { CatalogProvider } from '@fashionista/components/contexts'
import './App.scss'

import Header from 'components/Header'

export default function App () {
  return (
    <CatalogProvider>
      <Header />
    </CatalogProvider>
  )
}
