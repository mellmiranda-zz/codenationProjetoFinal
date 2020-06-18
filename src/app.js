import React from 'react'

import '@fashionista/css/index.css'

import Banner from 'components/Banner'
import Button from 'components/Button'

export default function App () {
  return (
    <>
      <Banner
        classNameBanner='banner__hero'
        src='https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg'
        alt='Hero Banner'
      />
      <Button
        type='submit'
        classNameBtn='btn__primary btn__primary-buy'
        text='Comprar'
      />

      <Button
        type='submit'
        classNameBtn='btn__secondary btn__secondary--blue'
        text='Adicionar ao carrinho'
        icon='fas fa-shopping-cart'
      />
      <Button
        type='submit'
        classNameBtn='btn__secondary btn__secondary--green'
        text='Finalizar compra'
      />

      <Button
        type='submit'
        classNameBtn='btn__icon'
        icon='fas fa-search'
      />

      <Button
        type='submit'
        classNameBtn='btn__icon btn__icon--pink'
        icon='fas fa-times'
      />
      <Button
        type='submit'
        classNameBtn='btn__icon'
        icon='fas fa-shopping-cart'
      />
    </>
  )
}
