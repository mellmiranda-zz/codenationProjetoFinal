import React from 'react'

import './Search.scss'

import Banner from 'components/Banner'
import ProductInfo from 'components/ProductInfo'

const Search = (props) => {
  return (
    <>
      <li className='search__item'>
        <a href='/'>
          <Banner
            classNameBanner='banner__product banner__product--search'
            src={props.image}
            alt={props.name}
            classNameDiscount='banner__product--search-discount'
            percent={props.discount_percentage}
          />
          <ProductInfo
            classNamePriceGroup='product-info__price-group--search'
            productName={props.name}
            oldPriceText='De'
            oldPriceValue={props.regular_price}
            priceValue={props.actual_price}
          />
        </a>
      </li>
    </>
  )
}

export default Search;