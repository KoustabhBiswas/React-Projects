import React from 'react'

export const Custominput = ({value,onClick,name}) => {
  return (
    <>
        <input  value={value} onClick={onClick} name={name} readOnly/>
    </>
  )
}
