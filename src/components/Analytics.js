import React, { Fragment } from 'react'
import './Analytics.css'
import Leads from './Leads'
import Orders from './Orders'
import Promo from './Promo'
import Sales from './Sales'
import Transactions from './Transactions'

const Analytics = () => {
  return (
   <Fragment>
    <div className='analytics m-5'>
        <div className='heading'>
                <h1 className='m-2 font-bold text-2xl'>Analytics</h1>
                <div className='heading-right'>
                    <p className='m-2 text-slate-400'>Time Period</p>
                    <p className='m-2'>Day<span className='text-slate-400'>(24hrs)</span></p>
                    <button className='m-2'>Export as CVS</button>
               </div>
       </div>

        <div className='grid grid-cols-3 divide-x-5 space-x-5 m-4'>
        <Sales /> 
        <Leads />
        <Orders />
        </div>

        <div className='m-2 grid grid-cols-2 gap-5'>
          <Transactions />
          <Promo />
        </div>
               
    </div>
   </Fragment>
  )
}

export default Analytics
