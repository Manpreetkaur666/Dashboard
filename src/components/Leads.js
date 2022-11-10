import React from 'react';
import bargraph from '../images/bargraph.png';

const Leads = () => {
  return (
    <div>
    <div className='sales-heading flex flex-row justify-between'>
      <h3>Leads</h3>
       <p className='text-blue-500'>Goals</p>
      </div>
    
      <div className='row-start-4'>      
       <div class="shadow-lg rounded-lg overflow-hidden">
       <img className='mt-10 mb-8' src={bargraph}></img>
       </div>
       </div>
  
    </div>
  )
}

export default Leads
