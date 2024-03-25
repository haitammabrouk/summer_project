import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from '../components/NavbarAdmin';
import RapportCardValide from '../components/RapportCardValide';
import { useSession } from '../SessionContext';
import Login from './Login';

function DepotRapports() {

    const [rapports, setRapports] = useState([]);
    const [search, setSearch] = useState('');

    const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    const checkNoteValid = (note) => {
        if (note >= 12 && note <= 20){
            return true
        }else{
            return false
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/get-rapports`)
        .then((response) => {
            setRapports(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log("error fetching rapports informations ");
        });
      }, []);

  return (
    
    checkId(sessionId) ? <Login /> : (
        <div className='depot-rapports min-h-full w-full'>
        <NavbarAdmin />
        <div className="project-files pt-10">
        <div className="archive-title">
                <p className='text-base font-montserrat  text-[#545454] underline'>Dans Cette Espace vous pouvez Consulter L'Archive</p>
            </div>
            <div className="search-card mt-8 mr-96 pr-24">
              <form className="search-form ">
                                <input
                                    className="form-input px-3 py-1 rounded-lg border-[#2e3748] border focus:outline-none "
                                    type="search"
                                    placeholder="Rechercher par Domaine" onChange={(e) => setSearch(e.target.value)}
                                />
              </form>
            </div>
            <div className="archive-content pt-10 flex justify-center">
                <ul className='rapport-cards flex flex-wrap pl-14'>
                {
                    rapports.filter((rapport) => {
                        return search.toLowerCase() === '' ? rapport : rapport.domaine.toLowerCase().includes(search);
                    } ).map((rapport) => 

                    checkNoteValid(rapport.note) &&

                        <li key={rapport.idR}><RapportCardValide domaine = {rapport.domaine} sujet = {rapport.sujet}
                        description = {rapport.description} id={rapport.idR} valide={rapport.valide}
                        note = {rapport.note} /> </li>
                    )
                }
                </ul>
            </div>
        </div>
    </div>
    )

  )
}

export default DepotRapports