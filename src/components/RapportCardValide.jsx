import React from 'react'
import axios from 'axios';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

function RapportCardValide({ id, domaine, sujet, description, valide, note }) {

    const [response, setResponse] = useState();

    const setValider =  (e) => {
        axios
        .post(`http://localhost:8080/rapport-valide/${id}`, {
            response,
        })
        .then((response) => {
            console.log("has been validated successfully");
        })
        .catch((error) => {
            console.log("error validating rapport");
        });
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/valide/${id}`)
        .then((response) => {
            setResponse(response.data)
        }).catch((error) => {
            console.log("error fetching rapports informations ");
        });
      }, [id]);

    const downloadFile = (e) => {
        e.preventDefault();
        axios
            .get(`http://localhost:8080/rapport/${id}/project`, {
                responseType: 'arraybuffer',
            })
            .then((response) => {
                const blob = new Blob([response.data]);
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'filename.zip'; // Provide the desired filename
                link.click();
            })
            .catch((error) => {
                console.log('Error fetching file: ', error);
            });
    };

  return (
    <div className='rapport-card-valide border border-1 border-[#4c759b] mt-6 w-card h-64  px-4  pt-4 ml-6 rounded-md text-left font-montserra'>
        <div className='rapport-card-domaine mb-3'>
                <p className='text-lg font-semibold'>{domaine} </p>
            </div>
            <div className='rapport-card-sujet'>
                <p className='text-[#363636] mt-1'>{sujet}</p>
            </div>
            <div className='rapport-card-description mt-3'>
                <p className='text-sm text-[#818080] font-thin pl-5 break-words'>{description}</p>
            </div>
            <div className='rapport-card-note'>
                <p className='text-[#363636] mt-1'>Note : {note}</p>
            </div>
            <div className='card-submission flex justify-between mt-5'>
                <button className='border rounded-sm bg-[#2f4e62] text-[#ffffff] py-1 px-4' onClick={downloadFile}>
                    Project Presentation
                </button>
                <button onClick={setValider} className='border rounded-sm bg-[#477d48] w-24 text-[#ffffff] py-1 px-4'>
                    {
                        response ? <FontAwesomeIcon icon={faCheckDouble} /> : 'Valider'
                    }
                </button>
            </div>
    </div>
  )
}

export default RapportCardValide