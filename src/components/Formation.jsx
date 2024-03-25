import React from 'react'

function Formation({ formation, handleFormationChange }) {
  return (
    <div className='formation mt-6 border border-1 border-[#4c759b] mx-56 rounded-md'>
        <div className='pb-4 pl-3 '>
            <div className='formation mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="formation" className='block text-left ml-3'>Formation</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 pl-2' type="text" value={formation.formation} id='formation' name='formation' onChange={(e) => handleFormationChange(e.target.name, e.target.value)} required />
            </div>
            <div className='etablisement mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="etab" className='block text-left ml-3'>Établissement</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 pl-2' type="text" value={formation.etab} id='etab' name='etab' onChange={(e) => handleFormationChange(e.target.name, e.target.value)} required />
            </div>
            <div className='ville mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="ville-form" className='block text-left ml-3'>Ville</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 pl-2' type="text" value={formation.ville} id='ville-form' name='ville-form' onChange={(e) => handleFormationChange(e.target.name, e.target.value)} required />
            </div>
            <div className='date-debut mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="date-debut" className='block text-left ml-3'>Date de début</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 px-2' type="date" value={formation.dateDebut} id='date-debut' name='date-debut' onChange={(e) => handleFormationChange(e.target.name, e.target.value)} required />
            </div>
            <div className='date-fin mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="date-fin" className='block text-left ml-3'>Date de fin</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 px-2' type="date" value={formation.dateFin} id='date-fin' name='date-fin' onChange={(e) => handleFormationChange(e.target.name, e.target.value)} />
            </div>
            <div className='description mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="description" className='block text-left ml-3 pb-1'>Description</label>
                <textarea name="description" id="description"  value={formation.description} className='bg-[#F4F4F5] w-text  mr-4 px-2' onChange={(e) => handleFormationChange(e.target.name, e.target.value)} cols="100" rows="6"></textarea>
            </div>
        </div>
    </div>
  )
}

export default Formation