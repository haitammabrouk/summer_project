import React from 'react'
import NavbarStudent from '../components/NavbarStudent';
import StructureCardStudent from '../components/StructureCardStudent';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import { useSession } from '../SessionContext';

function StructureConsultation() {

    const [search, setSearch] = useState('');

    const [structures, setStructures] = useState([]);

    const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/get-structures`)
        .then((response) => {
            setStructures(response.data);
        }).catch((error) => {
            console.log("error fetching structures informations ");
        });
    }, []);

  return (
    
    checkId(sessionId) ? <Login /> : (
      <div className='structure-consultation min-h-full w-full'>
        <NavbarStudent  />
        <div className='add-structure pt-8'>
          <div className="add-structure-title ">
            <p className='text-base font-montserrat  text-[#545454] underline'>Dans Cette Espace vous pouvez consulter les Structures D'acceuils</p>
          </div>
          <div className="add-structure-content">
          <div className="search-card mt-8 mr-96 pr-4">
              <form className="search-form  ">
                                <input
                                    className="form-input px-3 py-1 w-72 rounded-lg border-[#2e3748] border focus:outline-none "
                                    type="search"
                                    placeholder="Rechercher par le nom" onChange={(e) => setSearch(e.target.value)}
                                />
              </form>
            </div>
            <div className="structure-cards mx-72 mt-8 ">
              <ul>
                {
                  structures.filter((elt) => {
                    return search.toLowerCase() === '' ? elt : elt.nom.toLowerCase().includes(search);
                } ).slice().reverse().map((structure) => <li><StructureCardStudent adresse={structure.adresse} description={structure.description} email={structure.email} nom={structure.nom} numero={structure.numero}  /> </li>  )
                }
              </ul>
            </div>
          </div>
          </div>
    </div>
    )

  )
}

export default StructureConsultation