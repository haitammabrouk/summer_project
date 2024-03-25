import React from 'react'

function Experience({ experience, handleExperienceChange }) {
  return (
        <div className='experience mt-6 border border-1 border-[#4c759b] mx-56 rounded-md'>
        <div className='pb-4 pl-3 '>
            <div className='poste mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="poste" className='block text-left ml-3'>Poste</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 pl-2' value={experience.poste} type="text" id='poste' name='poste' onChange={(e) => handleExperienceChange(e.target.name, e.target.value)}  required />
            </div>
            <div className='employeur mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="employeur" className='block text-left ml-3'>Société</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 pl-2' type="text" value={experience.employeur} id='employeur' name='employeur' onChange={(e) => handleExperienceChange(e.target.name, e.target.value)}  required />
            </div>
            <div className='ville-exp mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="ville-exp" className='block text-left ml-3'>Ville</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 pl-2' type="text" id='ville-exp' value={experience.ville} name='ville-exp' onChange={(e) => handleExperienceChange(e.target.name, e.target.value)}  required />
            </div>
            <div className='date-debut-exp mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="date-debut-exp" className='block text-left ml-3'>Date de début</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 px-2' type="date" id='date-debut-exp' value={experience.dateDebut} name='date-debut-exp' onChange={(e) => handleExperienceChange(e.target.name, e.target.value)}  required />
            </div>
            <div className='date-fin-exp mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="date-fin-exp" className='block text-left ml-3'>Date de fin</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 px-2' type="date" id='date-fin-exp' value={experience.dateFin} name='date-fin-exp' onChange={(e) => handleExperienceChange(e.target.name, e.target.value)}  />
            </div>
            <div className='description-exp mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="description-exp" className='block text-left ml-3 pb-1'>Description</label>
                <textarea name="description-exp" id="description-exp" className='bg-[#F4F4F5] w-text  mr-4 px-2' value={experience.description} onChange={(e) => handleExperienceChange(e.target.name, e.target.value)}  cols="100" rows="6"></textarea>
            </div>
        </div>
    </div>

  )
}

export default Experience