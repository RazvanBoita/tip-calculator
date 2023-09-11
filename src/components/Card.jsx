import React, { useState } from 'react'
import Calculator from './Calculator'
import PercentButton from './PercentButton'
import CardInput from './CardInput'
import icondollar from '../assets/images/icon-dollar.svg'
import iconperson from '../assets/images/icon-person.svg'
import CustomPercentButton from './CustomPercentButton'
import BillCardInput from './BillCardInput'
import PeopleCardInput from './PeopleCardInput'
// let peopleNo=0;
// let billNo=0;
const Card = () => {
  const [percentage, setPercentage] = useState(0);
  const [peopleNo, setPeopleNo] = useState(0);
  const [billNo, setBillNo] = useState(0);
  const getDataFromBill = (data) => {
      setBillNo(data.amount);
  }
  const getDataFromPeople = (data) => {
      setPeopleNo(data.people);
  }

  return (
    <main className='bg-white flex flex-col gap-4 md:flex-row p-4 md:p-10 max-md:items-center md:justify-between rounded-2xl'>
      {/* <button onClick={() => console.log(billNo, peopleNo, percentage)}>Check</button> */}
      <section className='py-2 px-2 w-[100%] md:w-[50%]'>
          <h3 className='text-md text-dark tracking-wider'>Bill</h3>
          <BillCardInput onSubmit={getDataFromBill} source={icondollar}></BillCardInput>
          <h3 className='text-md mt-8 mb-4 text-dark tracking-wider'>Select Tip %</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 w-full gap-4'>
            <PercentButton change={setPercentage} numbervalue={5} textvalue="5%"></PercentButton>
            <PercentButton change={setPercentage} numbervalue={10} textvalue="10%"></PercentButton>
            <PercentButton change={setPercentage} numbervalue={15} textvalue="15%"></PercentButton>
            <PercentButton change={setPercentage} numbervalue={25} textvalue="25%"></PercentButton>
            <PercentButton change={setPercentage} numbervalue={50} textvalue="50%"></PercentButton>
            <CustomPercentButton></CustomPercentButton>
          </div>
          <h3 className='text-md text-dark tracking-wider mt-8'>Number of people</h3>
          <PeopleCardInput onSubmit={getDataFromPeople} source={iconperson}></PeopleCardInput>
      </section>
      <section className='w-[100%] md:w-[50%] bg-vdark rounded-xl flex flex-col items-center'>
        <Calculator bill={billNo} people={peopleNo} percent={percentage}></Calculator>
      </section>
    </main>
  )
}

export default Card