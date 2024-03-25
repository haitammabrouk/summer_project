import React from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useSession } from '../SessionContext';

function FilliereCardStudent({nom}) {

    const navigate = useNavigate();

    const { setRapports } = useSession(); // Use the correct hook

    const handleClick = (e) => {
        axios.get(`http://localhost:8080/get-rapports-filliere/${nom}`)
            .then((response) => {
                setRapports(response.data);
                console.log(response.data);
                navigate('/archive-etudiant-files');
            }).catch((error) => {
                console.log("error fetching rapports informations ");
            });
    }
  return (
    <div className='filliere-card flex justify-center pr-6 mt-6'>
            <div className="h-48 w-72 font-montserrat text-3xl px-8 bg-[#646e8c] text-[#ffffff] rounded-3xl flex justify-center items-center shadow-md  hover:-translate-y-2 transition duration-500  ">
                <button onClick={handleClick}>
                    <h2 className="text-xl font-semibold mb-2">{nom} </h2>
                </button>
            </div>
    </div>
  )
}

export default FilliereCardStudent