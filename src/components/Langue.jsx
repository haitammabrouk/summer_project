import React from 'react'

function Langue({ langue, handleLangueChange}) {
  return (
    <div className='langue mt-6 border border-1 border-[#4c759b] mx-56 rounded-md'>
        <div className='pb-4 pl-3 '>
            <div className='langue mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="langue" className='block text-left ml-3'>Langue</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 pl-2' value={langue.langue} type="text" onChange={(e) => handleLangueChange(e.target.name, e.target.value)} id='langue' name='langue' required />
            </div>
        </div>
    </div>
  )
}

export default Langue