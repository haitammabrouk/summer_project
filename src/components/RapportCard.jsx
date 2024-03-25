import React from 'react';
import axios from 'axios';

function RapportCard({ id, domaine, sujet, description }) {
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
        <div className='rapport-cards border border-1 border-[#4c759b] mt-6 w-card h-64  px-4 pb-5 pt-4 ml-6 rounded-md text-left font-montserrat'>
            <div className='rapport-card-domaine mb-3'>
                <p className='text-lg font-semibold'>{domaine}</p>
            </div>
            <div className='rapport-card-sujet'>
                <p className='text-[#363636] mt-1'>{sujet}</p>
            </div>
            <div className='rapport-card-description mt-3'>
                <p className='text-sm text-[#818080] font-thin pl-5 break-words'>{description}</p>
            </div>
            <div className='card-submission mt-10'>
                <button className='border rounded-sm bg-[#2f4e62] text-[#ffffff] py-2 px-8' onClick={downloadFile}>
                    Project Presentation
                </button>
            </div>
        </div>
    );
}

export default RapportCard;
