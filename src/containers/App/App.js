import React from 'react'

import { CatalogProvider } from '@fashionista/components/contexts'
import './App.scss'

import Header from 'components/Header'
import SearchList from 'containers/SearchList'
import Search from 'components/Search'

export default function App () {
  return (
    <CatalogProvider>
      <Header />
      <SearchList>
        <Search
          image='https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg'
          name='Nome do produto'

          discount_percentage='50%'
          productName='Nome do produto'
          oldPriceText='De'
          oldPriceValue='R$ 100,00'
          priceValue='R$ 50,00'
        />
      </SearchList>
    </CatalogProvider>
  )
}
