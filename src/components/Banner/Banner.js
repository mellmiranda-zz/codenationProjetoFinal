import React from 'react'

import './Banner.scss'

export default function Banner (props) {
  return (
    <div className={props.classNameBanner}>
      <img src={props.src} alt={props.alt} />
      <div className={props.classNameDiscount}>
        <span>{props.percent}</span>
        <span>OFF</span>
      </div>
    </div>
  )
}
