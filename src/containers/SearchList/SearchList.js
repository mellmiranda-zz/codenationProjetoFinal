import React from 'react'

import 'components/Search/Search.scss'

import Search from 'components/Search'

const SearchList = ({catalog}) => {
  return (
    <>
      <ul className='container search__list'>
        <p className='search__list-title'>Resultados da busca</p>
        {catalog.map((product) => {
          return <Search product={product} key={product.code_color} />
        })}
      </ul>
    </>
  )
}

export default SearchList
