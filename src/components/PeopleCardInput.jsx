import React, { useState } from 'react'

const PeopleCardInput = (props) => {

  const [people, setPeople] = useState('');  

  const handleChange = (e) => {
    setPeople(e.target.value);
  }  

  const handleSubmit = () => {
    props.onSubmit({people});
  }

  return (
    <div className='flex items-center' onBlur={handleSubmit}>
        <img src={props.source} className='text-normal order-1 absolute text-2xl pl-4'></img>
        <input type="number"  placeholder="0" value={people} onChange={handleChange} className='text-right text-xl py-2 pr-4 order-2 w-full text-dark bg-xlight' />
    </div>
  )
}

export default PeopleCardInput