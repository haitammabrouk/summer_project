import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function StructureCard({adresse, description, email, nom, numero}) {

    const handleDelete = (e, nom) => {
        axios.delete(`http://localhost:8080/delete-structure/${nom}`)
        .then(() => console.log("The structure has been deleted succesfully"))
        .catch(() => console.log("An error has occured !!"))
    }

  return (
    <div className='structure-card border border-1 border-[#4c759b] mt-6 w-card px-4 pb-5 pt-4  rounded-md text-left font-montserrat'>
        <div className="structure-card-title flex justify-between items-center   mb-3">
            <p className='text-lg font-semibold'>{nom}  </p>
            <p className='text-[#9f4c4c] '><a href='/structure' onClick={(e) => handleDelete(e, nom)}><FontAwesomeIcon icon={faXmark} size='2x' /></a></p>
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

export default StructureCard