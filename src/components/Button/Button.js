import React from 'react'

import './Button.scss'

export default function Button(props) {
  return (
    <button id={props.id} type={props.type} className={`btn ${props.classNameBtn}`} onClick={props.click}>
      {props.text}
      <i className={props.icon}></i>
    </button>
  )
}

// Amostras dos botões
// Botões com borda
//   <Button
//     type='submit'
//     classNameBtn='btn__primary btn__primary-buy'
//     text='Comprar'
//   />

// Botões com preenchimento
//   <Button
//     type='submit'
//     classNameBtn='btn__secondary btn__secondary--blue'
//     text='Adicionar ao carrinho'
//     icon='fas fa-shopping-cart'
//   />
//   <Button
//     type='submit'
//     classNameBtn='btn__secondary btn__secondary--green'
//     text='Finalizar compra'
//   />

// Botões ícones
//   <Button
//     type='submit'
//     classNameBtn='btn__icon'
//     icon='fas fa-search'
//   />
//   <Button
//     type='submit'
//     classNameBtn='btn__icon btn__icon--pink'
//     icon='fas fa-times'
//   />
//   <Button
//     type='submit'
//     classNameBtn='btn__icon'
//     icon='fas fa-shopping-cart'
//   />
