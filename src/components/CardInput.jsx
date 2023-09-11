import React from 'react'

const CardInput = (props) => {
  return (
    <div className='flex items-center'>
        <img src={props.source} className='text-normal order-1 absolute text-2xl pl-4'></img>
        <input type="number"  placeholder="0" className='text-right text-xl py-2 pr-4 order-2 w-full text-dark bg-xlight' />
    </div>
  )
}

export default CardInput