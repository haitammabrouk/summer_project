import React from 'react'

function Competence({ competence, handleCompetenceChange}) {
  return (
    <div className='competence mt-6 border border-1 border-[#4c759b] mx-56 rounded-md'>
        <div className='pb-4 pl-3 '>
            <div className='competence mt-3 font-montserrat text-[#414141]'>
                <label htmlFor="competence" className='block text-left ml-3'>Compétences</label>
                <input className='bg-[#F4F4F5] w-text h-9 mr-4 pl-2' type="text" value={competence.competence} id='competence' onChange={(e) => handleCompetenceChange(e.target.name, e.target.value)} name='competence' required />
            </div>
        </div>
    </div>
  )
}

export default Competence