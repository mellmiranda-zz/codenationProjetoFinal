import React, { useState, useEffect } from 'react'

import './Header.scss'

import Button from '../Button'
import Input from '../Input'

import SearchList from '../../containers/SearchList'

const Header = () => {
  const [openInputSearch, setOpenInputSearch] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [listSearch, setListSearch] = useState([])

  const handleOpenInputSearch = (state) => {
    const showInput = document.querySelector('.search__input')
    const showList = document.querySelector('.search__list')
    const blockBody = document.querySelector('body')

    if (!state) {
      const inputSearch = document.querySelector('.input__search')
      showInput.classList.add('search__input--open')
      showList.classList.add('search__list--open')
      blockBody.classList.add('search__list--body-hidden')
      inputSearch.focus()
    } else if (state) {
      showInput.classList.remove('search__input--open')
      showList.classList.remove('search__list--open')
      blockBody.classList.remove('search__list--body-hidden')
    }
  }

  const handleListSearch = (e) => {
    const inputTargetValue = e.target.value
    setInputValue(inputTargetValue)
  }

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
              click={() => handleOpenInputSearch(setOpenInputSearch(!openInputSearch))}
            />
          </div>
          <div className='search__input'>
            <Input
              classNameInputGroup='input__search-position'
              type='text'
              placeholder='o que você procura?'
              classNameInput='input__search'
              change={(e) => handleListSearch(e)}
            />
            <Button
              id='search-btn'
              type='submit'
              classNameBtn='btn__icon btn__icon--pink'
              icon='fas fa-times'
              click={() => handleOpenInputSearch(!setOpenInputSearch(openInputSearch))}
            />
          </div>
        </div>
        <Button
          type='submit'
          classNameBtn='btn__icon'
          icon='fas fa-shopping-cart'
        />
        <SearchList />
      </nav>
    </header>
  )
}

export default Header
