import React, { useState } from 'react'
let personal='0.00';
let total='0.00';
const Calculator = (props) => {

  personal = (props.bill)*(props.people)*(props.percent)!==0 ? ((props.bill*props.percent)/(props.people*100)).toFixed(2) : '0.00';
  total= (props.bill)*(props.people)*(props.percent)!==0 ? ((props.bill*props.percent)/(props.people*100)+(props.bill/props.people)).toFixed(2) : '0.00';

  return (
    <main className='w-full h-full flex flex-col justify-between'>
      <section className='mt-12 flex flex-col gap-8'>
        <div className='w-[80%] flex justify-between items-center mx-auto '>
          <div>
            <h3 className='text-lighter'>Tip Amount</h3>
            <p className='text-normal'>/person</p>
          </div>
          <h1 className='text-xl lg:text-4xl text-forBg'>${personal}
          </h1>
        </div>
        <div className='w-[80%] flex justify-between items-center mx-auto '>
          <div>
            <h3 className='text-lighter'>Total</h3>
            <p className='text-normal'>/person</p>
          </div>
          <h1 className='text-xl lg:text-4xl text-forBg'>${total}
          {/* {(props.bill)*(props.people)*(props.percent)!==0 ? ((props.bill*props.percent)/(props.people*100)+(props.bill/props.people)).toFixed(2) : '0.00' } */}
          </h1>
        </div>
      </section>
      <section className='w-[80%] flex justify-center items-center mx-auto'>
        <button className='bg-dark hover:bg-forBg w-full mb-12 flex justify-center items-center text-lighter py-2' onClick={() => {
          personal='0.00',
          total='0.00'
        }}>RESET</button>
      </section>
    </main>
  )
}

export default Calculator