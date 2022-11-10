import React, { Fragment } from 'react';
import linegraph from '../Linegraph.png';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)
const Sales = () => {
 

  return (
    <Fragment>
      <div>
      <div className='sales-heading flex flex-row justify-between'>
      <h3>Sales</h3>
       <p className='text-blue-500'>All sales</p>
      </div>
       
       <hr className='w-30 m-3'/>
       <div className='row-start-3 flex flex-row justify-between'>
        <div>
           <h3>$256.43K</h3>
           <p className='text-xs text-slate-400'>$185 avg. score</p>
        </div>      
           <p className='text-green-500 bg-green-100'>+17.5%</p>
       </div>

       
       <div className='row-start-4'>      
       <div class="shadow-lg rounded-lg overflow-hidden">
       <img className='mt-5 mb-10' src={linegraph}></img>
       </div>
       </div>
       
      </div>
    </Fragment>
  )
}

export default Sales
