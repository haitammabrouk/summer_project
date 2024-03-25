import React from 'react'
import NavbarEncadrant from '../components/NavbarEncadrant'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from '../SessionContext';
import RapportCardNote from '../components/RapportCardNote';
import Login from './Login';

function EtudiantRapport() {

    const [rapport, setRapport] = useState();

    const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    const {id} = useSession();

    useEffect(() => {
        axios.get(`http://localhost:8080/rapport/${id}`)
            .then((response) => {
                setRapport(response.data);
                console.log(id);
            })
            .catch((error) => {
                console.log('Error fetching rapport information: ', error);
                console.log(id);
            });
    }, [id]); 

    const downloadFile = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:8080/rapport/${id}/file`, {
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
    
    checkId(sessionId) ? <Login /> : (
        <div className='etudiant-rapport min-h-full w-full'>
        <NavbarEncadrant />
        {
            rapport ? (
                <RapportCardNote id={rapport.idR} domaine={rapport.domaine} sujet={rapport.sujet}
                structure={rapport.structure} duree={rapport.duree} description={rapport.description}
                 handleClick = {downloadFile} fileName = {rapport.fileName}  />
            ) : (
                <div className='flex justify-center items-center'>
                    ...loading...
                </div>
            )
        }
    </div>
    )

  )
}

export default EtudiantRapport