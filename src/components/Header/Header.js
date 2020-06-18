import React from 'react'

import './Header.scss'

import Button from '../Button'

const Header = () => {
  return (
    <header className='container header'>
      <nav className='header__nav'>
        <div className='header__nav-align'>
          <a href='/' className='header__logo'>
            <h1>Projeto Loja</h1>
          </a>
          <div className='header__search'>
            <Button
              type='submit'
              classNameBtn='btn__icon btn__icon--pink'
              icon='fas fa-search'
            />
          </div>
        </div>
        <Button
          type='submit'
          classNameBtn='btn__icon'
          icon='fas fa-shopping-cart'
        />
      </nav>
    </header>
  )
}

export default Header
