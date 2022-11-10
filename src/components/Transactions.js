import React, { Fragment } from 'react';
import transactions from "../transcationdata.json"

const Transactions = () => {
    const data = transactions;
  return (
    <Fragment>
        <div>
      <div className='transactions-heading flex flex-row justify-between'>
      <h3>Transactions <span className='text-xs text-slate-400'>| 456 total</span></h3>
       <p className='text-blue-500'>View All</p>
      </div>
      <div className='table'>
      <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div  className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="w-full divide-y divide-gray-200">
                      <thead className="bg-gray-10">
                          <tr>
                             <th className="px-1 py-1 text-left text-xs text-gray-400">.</th>
                             <th className="px-1 py-1 text-left text-xs text-gray-400">Name,phone  </th>
                             <th className="px-1 py-1 text-left text-xs text-gray-400">Order Status </th>
                             <th className="px-1 py-1 text-left text-xs text-gray-400">Advertasing</th>
                             <th className="px-1 py-1 text-left text-xs text-gray-400">Invoice</th>
                             <th className="px-1 py-1 text-left text-xs text-gray-400">.</th>               
                          </tr>
                
                  </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.transactions.map(trans =>(
                    <tr>
                    <td className="px-1 py-2 whitespace-nowrap">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar" />
                    </td>
                    <td className="px-3 py-5 whitespace-nowrap">
                        {trans.name}
                    </td>
                    <td className="px-3 py-5 whitespace-nowrap">
                        {trans.OrderStatus}
                    </td>
                    <td className="px-3 py-5 whitespace-nowrap">
                        {trans.Advertasing}
                    </td>
                    <td className="px-3 py-5 whitespace-nowrap">
                        {trans.Invoice}
                    </td>
                    <td className="px-3 py-5 whitespace-nowrap">
                        ...
                    </td>
                    </tr>
                     ))}
                </tbody>
                    </table>
                </div>
              </div>
          </div>
         </div>
      </div>
      </div>
    </Fragment>
  )
}

export default Transactions
