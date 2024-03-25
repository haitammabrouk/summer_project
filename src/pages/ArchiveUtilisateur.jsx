import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import FilliereCard from '../components/FilliereCard'

function ArchiveUtilisateur() {

    const [fillieres, setFillieres] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/get-fillieres`)
        .then((response) => {
            setFillieres(response.data);
        }).catch((error) => {
            console.log("error fetching fillieres informations ");
        });
      }, []);


  return (
    <div className='archive-utilisateur min-h-full w-full'>
        <Navbar />
        <div className="archive pt-10">
            <div className="archive-title">
                <p className='text-base font-montserrat  text-[#545454] underline'>Dans Cette Espace vous pouvez Consulter L'Archive</p>
            </div>
            <div className="archive-content pt-10 flex justify-center">
                <ul className='filliere-cards flex flex-wrap pl-5'>
                    {
                        fillieres.map((filliere) => 
                            <li key={filliere.id}><FilliereCard nom = {filliere.nom} /> </li>
                        )
                    }
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default ArchiveUtilisateur