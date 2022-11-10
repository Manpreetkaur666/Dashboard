import React from 'react';
import pieChart from '../pie-chart.png';

const Orders = () => {
  return (
    <div>
    <div className='sales-heading flex flex-row justify-between'>
      <h3>Orders</h3>
       <p className='text-blue-500'>0 - 500</p>
      </div>
    
      <div className='row-start-4'>      
       <div class="shadow-lg rounded-lg overflow-hidden">
       <img className='mt-5 mb-10' src={pieChart}></img>
       </div>
       </div>
  
    </div>
  )
}

export default Orders
