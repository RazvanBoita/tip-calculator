import { useState } from 'react'
import Card from './components/Card'
function App() {
  return (
    <>
      <main className='flex flex-col w-full min-h-[100vh] items-center bg-lighter font-mono'>
        <section className='mt-24 pb-16'>
            <p className='text-vdark text-2xl tracking-[8px]'>SPLI</p>
            <p className='text-vdark text-2xl tracking-[8px]'>TTER</p>
        </section>
        <section className='w-[80%] md:w-[60%]'>
            <Card></Card>
        </section>
      </main>
    </>
  )
}

export default App
