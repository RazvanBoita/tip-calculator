import React, { useState } from 'react'

const PercentButton = (props) => {

  return (
    <button className={`flex justify-center items-center rounded-md bg-vdark text-white focus:bg-forBg hover:bg-forBg`} onClick={() => {props.change(props.numbervalue)}}>
        <p className='px-6 py-2 text-lg'>{props.textvalue}</p>
    </button>
  )
}

export default PercentButton