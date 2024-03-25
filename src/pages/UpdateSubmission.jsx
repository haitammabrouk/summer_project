import React from 'react'
import NavbarStudent from '../components/NavbarStudent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'
import './css/Submission.scss'
import { useSession } from '../SessionContext'
import Login from './Login'

function UpdateSubmission() {

    const [domaine, setDomaine] = useState('');
    const [structure , setStructure] = useState('');
    const [duree , setDuree] = useState('');
    const [description , setDescription] = useState('');
    const [sujet, setSujet] = useState('');

    const {sessionId} = useSession();

    const [formData, setFormData] = useState(new FormData());

    const [check, setCheck] = useState(false);
    const [checkError, setCheckError] = useState(false);

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    const handleDomaineChange = (e) => {
        setDomaine(e.target.value);
    }

    const handleStructureChange = (e) => {
        setStructure(e.target.value);
    }
    const handleSujetChange = (e) => {
        setSujet(e.target.value);
    }
    const handleDureeChange = (e) => {
        setDuree(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log('Selected file:', file);
    
        const updatedFormData = new FormData(); // Create a new FormData instance
        updatedFormData.append('file', file);
    
        setFormData(updatedFormData); // Update the state with the new FormData
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.append('domaine', domaine);
        formData.append('sujet', sujet);
        formData.append('structure', structure);
        formData.append('duree', duree);
        formData.append('description', description);

        axios.put(`http://localhost:8080/rapport/${sessionId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            setCheck(true);
            setCheckError(false);
        }).catch((error) => {
            setCheck(false);
            setCheckError(true);
        })
    }

  return (
    checkId(sessionId) ? <Login /> : (
        <div className='update-submission w-full min-h-full'>
        <NavbarStudent />
        <div className='pt-8 flex flex-col items-center'>
            <div className='first-section flex  font-montserrat pl-3'>
                <div className="first-section-icon">
                    <span className='text-[#36425b]'>
                        <FontAwesomeIcon icon={faPen} size='2x' />
                    </span>
                </div>
                <div className="first-section-content pl-4">
                    <p className='text-left text-3xl font-medium text-[#36425b] pb-2'>Projet de Fin d’Etudes </p>
                    <p className='text-sm text-[#7d7d7d] pb-4 text-left'>Dans Cette Espace Vous Pouvez Modifier Les Informations Concernant Votre PFE</p>
                    <div className='date-delai border-b border-[#36425b] border-b-1 pb-2'>
                    </div>
                    <div className="first-section-form flex justify-center">
                        <form onSubmit={handleSubmit} >
                        <div className='flex justify-between items-start'>
                            <div className='flex flex-col justify-start ' >
                                <div className='flex justify-between items-center'>
                                    <div className="domaine-div mt-6">
                                        <input value={domaine} onChange={handleDomaineChange} type="text" className='outline-none border-b-2 text-sm font-montserrat font-semibold border-gray-300 h-10 w-96 focus:border-[#36425b] duration-1000' placeholder='Domaine' name='domaine'   />
                                    </div>
                                </div>
                                <div className="sujet-div mt-6">
                                    <input value={sujet} onChange={handleSujetChange} type="text" className='outline-none border-b-2 text-sm font-montserrat font-semibold border-gray-300 h-10 w-96 focus:border-[#36425b] duration-1000' placeholder='Sujet' name='structure'   />
                                </div>
                                <div className="structure-div mt-6">
                                    <input value={structure} onChange={handleStructureChange} type="text" className='outline-none border-b-2 text-sm font-montserrat font-semibold border-gray-300 h-10 w-96 focus:border-[#36425b] duration-1000' placeholder='Structure' name='structure'   />
                                </div>
                                <div className="duree-div mt-6">
                                    <input value={duree} onChange={handleDureeChange} type="number" min={5} max={6} className='outline-none border-b-2 text-sm font-montserrat font-semibold border-gray-300 h-10 w-96 focus:border-[#36425b] duration-1000' placeholder='Duree de stage (En mois)' name='duree'   />
                                    <p className='text-xs text-[#7d7d7d] text-left pt-1'>min : 5 mois / max : 6 mois</p>
                                </div>
                                <div className='description-sujet mt-12 font-montserrat text-[#414141]'>
                                    <textarea
                                        value={description}
                                        onChange={handleDescriptionChange}
                                        name="description-sujet"
                                        id="description-sujet"
                                        className='outline-none border-b-2 text-sm font-montserrat font-semibold border-gray-300 h-10 w-96 focus:border-[#36425b] duration-1000'
                                        placeholder='Description de sujet'
                                        cols="100"
                                        rows="6"
                                        maxLength="500"
                                    ></textarea>
                                </div>
                                {
                            check && (
                                <div>
                                    <p className='text-sm text-[#3e7448] mt-3 mr-20'>The Form has been Updated Succesfully</p>
                                </div>
                            )
                        }
                        {
                            checkError && (
                                <div>
                                    <p className='text-sm text-[#702d2d] mt-3 text-left'>An Error Has been Occured While updating The Form !</p>
                                </div>
                            )
                        }
                            </div>
                            <div className='pt-10 border border-1 border-[#545353] rounded-xl mt-10 pb-10 pl-10 ml-56'>
                                <input type="file" onChange={handleFileChange} name="file" id="file" />
                            </div>
                        </div>
                        <div className='mt-10 pb-10'>
                            <button type='submit' className='bg-[#36425b] hover:cursor-pointer px-4 py-1 text-center text-[#ffffff]'>
                                submit
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  )
}

export default UpdateSubmission