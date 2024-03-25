import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import NavbarStudent from '../components/NavbarStudent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSession } from '../SessionContext'
import { Link } from 'react-router-dom'
import Login from './Login'

function SubmissionDetails() {

    const [rapport, setRapport] = useState();

    const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/rapport/${sessionId}`)
            .then((response) => {
                setRapport(response.data);
            })
            .catch((error) => {
                console.log('Error fetching rapport information: ', error);
            });
    }, [sessionId]); 

    const downloadFile = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:8080/rapport/${sessionId}/file`, {
            responseType: 'arraybuffer',
        }).then((response) => {
            const blob = new Blob([response.data]);
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'filename.zip'; // Provide the desired filename
            link.click();
        }).catch((error) => {
            console.log("Error fetching file: ", error);
        });
    };

  return (
    checkId(sessionId) ? <Login /> :
    (
        <div className='submission-details w-full min-h-full'>
        <NavbarStudent />
        {
            rapport ? (
        <div className='pt-8 flex flex-col items-center '>
            <div className='first-section flex  font-montserrat pl-3'>
                <div className="first-section-icon">
                    <span className='text-[#374a65]'>
                        <FontAwesomeIcon icon={faCircleInfo} size='2x' />
                    </span>
                </div>
                <div className="first-section-content pl-4">
                    <p className='text-left text-3xl font-medium text-[#374a65] pb-2'>Projet de Fin d’Etudes </p>
                    <p className='text-sm text-[#7d7d7d] pb-1 text-left'>Voici les Information de Votre PFE</p>
                    <p className='text-sm text-[#7d7d7d] pb-4 text-left'><Link to='/update-submission' className='underline hover:text-[#45899c]'>Si vous voulez modifier, cliquez sur ce lien-ci</Link></p>
                    <div className='date-delai border-b border-[#374a65] border-b-1 pb-2 w-full'>

                    </div>
                    <div className="first-section-form flex justify-center ">
                        
                                <form >
                        <div className='flex justify-evenly items-start '>
                            <div className='flex flex-col justify-start text-left mr-48 ' >
                                <div className='flex justify-between items-center'>
                                    <div className="domaine-div mt-6">
                                        <p className=''><span className='text-[#2f4e62] mr-3 font-semibold'>Domaine : </span>{rapport.domaine} </p>
                                    </div>
                                </div>
                                <div className="sujet-div mt-6">
                                    <p className=''><span className='text-[#2f4e62] mr-3 font-semibold'>Sujet : </span> {rapport.sujet} </p>
                                </div>
                                <div className="structure-div mt-6">
                                    <p><span className='text-[#2f4e62] mr-3 font-semibold'>Structure D'accueil : </span> {rapport.structure} </p>
                                </div>
                                <div className="duree-div mt-6">
                                    <p><span className='text-[#2f4e62] mr-3 font-semibold'>Duree de Stage : </span>{rapport.duree} </p>
                                </div>
                                <div className='description-sujet mt-6 font-montserrat text-[#414141]'>
                                    <p><span className='text-[#2f4e62] mr-3 font-semibold'>Description de Sujet : </span> <span className='block'> {rapport.description} </span></p>
                                </div>
                            </div>
                            <div className="card-submission pt-8 ">
                                <p className='text-[#2f4e62] mr-3 font-semibold text-left'>Project File: {rapport.fileName}</p>
                                <button className='border rounded-sm bg-[#2f4e62] text-[#ffffff] py-2 px-8 mt-3' onClick={downloadFile}>Download File</button>
                            </div>   
                        </div>
                        </form>
                            
                    </div>
                </div>
            </div>
        </div>) : (
                                <div className='flex justify-center items-center mt-20'>
                                    <p className='text-xl font-montserrat text-[#824040] underline'>Le Projet n'est pas encore soumis</p>
                                </div>
                            )
                        }

        </div>
    )
  )
}

export default SubmissionDetails