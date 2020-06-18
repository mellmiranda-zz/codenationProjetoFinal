import React from 'react'

import './ProductInfo.scss'

const ProductInfo = (props) => {
  return (
    <>
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
    </>
  )
}

export default ProductInfo
