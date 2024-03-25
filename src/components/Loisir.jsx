import React from 'react'

function Loisir({ loisir, handleLoisirChange}) {
  return (
    <div className='loisir mt-6 border border-1 border-[#4c759b] mx-56 rounded-md'>
        <div className='pb-4 pl-3 '>
            <div className='loisir mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="loisir" className='block text-left ml-3'>
                    Centres d'intérêt
                </label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 pl-2' type="text" value={loisir.loisir} id='loisir' name='loisir' onChange={(e) => handleLoisirChange(e.target.name, e.target.value)} required />
            </div>
        </div>
    </div>
  )
}

export default Loisir