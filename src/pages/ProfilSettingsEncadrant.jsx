import React from 'react'
import NavbarEncadrant from '../components/NavbarEncadrant';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from '../SessionContext';
import { Link } from 'react-router-dom';
import usePasswordToggler from '../components/usePasswordToggler';
import Login from './Login';

function ProfilSettingsEncadrant() {

    const [encadrant, setEncadrant] = useState();

    const [PasswordInputType, ToggleIcon] = usePasswordToggler();

    const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/encadrant/${sessionId}`)
        .then((response) => {
            setEncadrant(response.data);
            console.log(response.data.idP);
        }).catch((error) => {
            console.log("error fetching encadrant informations ", error);
        });
    }, [sessionId]);

  return (
    
    checkId(sessionId) ? <Login /> : (
        <div className='profil-settings-encadrant w-full min-h-full font-montserrat'>
        <NavbarEncadrant />
        <div className='profil-settings-content pt-24'>
            <div className="profil-settings-title border border-[#464646] px-10 py-9 mx-72">
                <p className='text-2xl font-semibold pb-2'>Profil Settings</p>
                <p className='text-sm text-[#5c5b5b]'>Si l'une Des Informations Est Incorrecte, Vous Pouvez <br /> Contacter L'Administration</p>
            </div>
            <div className='  border border-[#464646] px-10 py-9 mx-72'>
                {
                    encadrant && (
                        <form>
                    <p className='pb-2 text-sm font-semibold mr-56 '>informations de base :</p>
                    <div className='space-y-5'>
                        <div className='cne'>
                            <input type="num" value={encadrant.idP} placeholder='CIN' className='bg-[#F4F4F5] w-96 h-9 pl-2' disabled />
                        </div>
                        <div className='nom'>
                            <input type="text" value={encadrant.nom} placeholder='Nom' className='bg-[#F4F4F5] w-96 h-9 pl-2' disabled />
                        </div>
                        <div className='prenom'>
                            <input type="text" value={encadrant.prenom} placeholder='Prenom'  className='bg-[#F4F4F5] w-96 h-9 pl-2' disabled />
                        </div>
                        <div className='email'>
                            <input type="email" value={encadrant.email} placeholder='example@usms.ac.ma' className='bg-[#F4F4F5] w-96 h-9 pl-2' disabled  />
                        </div>
                        <div className='password'>
                            <input type={PasswordInputType} value={encadrant.password} placeholder='Password' className='bg-[#F4F4F5] w-96 h-9 pl-2  ml-5' disabled  />
                            <span className='password-toggle-icon pl-2 '>{ToggleIcon}  </span>
                            <div className='mr-52 text-sm text-[#3c3c3c] mt-1'>
                            <Link to='/reset' className='underline hover:text-[#45899c]'>modifier le mot de passe</Link>
                            </div>
                        </div>
                    </div>
                </form>
                    )
                }
            </div>
        </div>
    </div>
    )

  )
}

export default ProfilSettingsEncadrant