import React from 'react'

import './Search.scss'

import Banner from 'components/Banner'

const Search = (props) => {
  return (
    <>
      <li className="search__item">
        <a href="/">
          <Banner
            classNameBanner="banner__product banner__product--search"
            src={props.image}
            alt={props.name}
            classNameDiscount="banner__product--search-discount"
            percent={props.discount_percentage}
          />
          <div className={`product-info__price-group ${props.classNamePriceGroup}`}>
            <h4>{props.productName}</h4>
            <div className={`product-info__price ${props.classNamePrice}`}>
              <p>
                {props.oldPriceText} <span className={`product-info__price--old ${props.classNameOldPrice}`}>{props.oldPriceValue}</span>
              </p>
              <p>
                Por <span className={`product-info__price--new ${props.classNameNewPrice}`}>{props.priceValue}</span>
              </p>
              <p className="product-info__price--bigger--installments">
                {props.installmentsText} <span>{props.installments}</span>
              </p>
            </div>
          </div>
        </a>
      </li>
    </>
  )
}

export default Search;