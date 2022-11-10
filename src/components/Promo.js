import React from 'react'

const Promo = () => {
  return (
    <div className='w-90 ml-20'>
       <div className='transactions-heading flex flex-row justify-between'>
      <h3>Wow!</h3>
       <p className='text-blue-500'>Have a promocode?</p>
      </div>
      <div className="relative w-100vw h-40 m-2 bg-gradient-to-r from-slate-300 to-blue-300 rounded-lg">
        <div className='absolute inset-x-0 bottom-3 m-2'>
            <p>Want more?</p>
            <div className='text flex flex-row justify-between'>
            <p><span className='text-blue-500 font-bold'>Increase </span>your power</p>
            <p>$49<span className='text-slate-400'>/year</span></p>
            </div>
        </div>
         
      </div>
      
    </div>
  )
}

export default Promo

// bg-[url('/img/hero-pattern.svg')]