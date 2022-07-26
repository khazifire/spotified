import React, { useEffect,useState } from 'react';

const BarChart = ({data}) => {
    const sizes =[64,56,52,44,36]
  
    return ( 
        <div className='flex flex-col items-start lg:flex-row gap-8 '>
            {data?.slice(0,5).map((item,index) => (
            <div>

            <div className={`border-2 border-white hover:border-green hover:border-opacity-10 border-opacity-10 bg-gray bg-opacity-5 shadow hover:shadow-2xl rounded-lg w-${sizes[index]} lg:w-48 p-4 lg:h-${sizes[index]}`}>
                <p className='text-4xl'>Top {index+1}</p>
                <span className='text-lg capitalize'>{item.genre}</span>
            </div>
            </div>
            ))}
        </div>
     );
}
 
export default BarChart;