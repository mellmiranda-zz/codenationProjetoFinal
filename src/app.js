import React from 'react'

import '@fashionista/css/index.css'

import Banner from 'components/Banner'

export default function App () {
  return (
    <>
      <Banner
        classNameBanner='banner__hero'
        src='https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg'
        alt='Hero Banner'
      />
    </>
  )
}
