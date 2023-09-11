import React, { useState } from 'react'

const BillCardInput = (props) => {

  const [amount, setAmount] = useState('');

  const handleChange = (e) => {
    setAmount(e.target.value);
  }  

  const handleSubmit = () => {
    props.onSubmit({amount});
  }

  return (
    <div className='flex items-center' onBlur={handleSubmit}>
        <img src={props.source} className='text-normal order-1 absolute text-2xl pl-4'></img>
        <input type="number"  placeholder="0" value={amount} onChange={handleChange} className='text-right text-xl py-2 pr-4 order-2 w-full text-dark bg-xlight' />
    </div>
  )
}

export default BillCardInput