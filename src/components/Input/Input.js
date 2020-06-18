import React from 'react'

import './Input.scss'

export default function Input (props) {
  return (
    <div className={props.classNameInputGroup}>
      <input className={props.classNameInput} type={props.type} id={props.id} name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.change}/>
      <label htmlFor={props.id} className={props.classNameLabel}>{props.label}</label>
    </div>
  )
}

// Amostra de input
//   <Input
//     type='text'
//     placeholder='o que você procura?'
//     className='input__search'
//   />
