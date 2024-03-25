import React from 'react'

function StructureCardStudent({adresse, description, email, nom, numero}) {

  return (
    <div className='structure-card-student border border-1 border-[#4c759b] mt-6 w-card px-4 pb-5 pt-4  rounded-md text-left font-montserrat'>
        <div className="structure-card-title flex justify-between items-center   mb-3">
            <p className='text-lg font-semibold'>{nom} </p>
        </div>
        <div className="structure-card-adresse">
            <p className='text-[#363636] mt-1'>{adresse} </p>
        </div>
        <div className="structure-card-numero-email">
            <p className='text-[#363636] '>{numero} / <a href={`mailto:${email}`} className='hover:underline'>{email}</a> </p>
        </div>
        <div className="structure-card-description mt-3 ">
            <p className='text-sm text-[#818080] font-thin pl-5'> {description}...</p>
        </div>
    </div>
  )
}

export default StructureCardStudent