import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateStudent({id}) {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [filliere, setFilliere] = useState('');
    const [encadrant, setEncadrant] = useState('');

    const [encadrants, setEncadrants] = useState([]);

    const [fillieres, setFillieres] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/get-fillieres`)
        .then((response) => {
            setFillieres(response.data);
        }).catch((error) => {
            console.log("error fetching fillieres ");
        });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8080/get-encadrants`)
        .then((response) => {
            setEncadrants(response.data);
        }).catch((error) => {
            console.log("error fetching encadrants ");
        });
    }, []);
    
    const [hide, setHide] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const jsonData = {
            nom, 
            prenom,
            email,
            password,
            filliere,
            encadrant
        }
        axios.put(`http://localhost:8080/etudiant/${id}`, jsonData)
        .then((response) => {
            console.log("Student is updated succesfully ", response.data);
        }).catch((error) => {
            console.log("error updating student ", error);
            console.log(id);
        })
    }

    const hideModal = (e) => {
        setHide(true);
    }

    const handleNomChange = (e) => {
        setNom(e.target.value);
    }
    const handlePrenomChange = (e) => {
        setPrenom(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleFilliereChange = (e) => {
        setFilliere(e.target.value);
    }
    const handleEncadrantChange = (e) => {
        setEncadrant(e.target.value);
    }

  return (
    <div className={`${hide && 'hidden'}`}>
        <div className="flex justify-center items-center h-screen">
                    <div className=" py-8 px-1 border border-2 bg-[#475170] clear-form">
                         <form  className='flex justify-center flex-col items-center mr-20 ml-20'>
                            <div className="form-title  mr-4 ">
                                <p className='text-3xl text-[#848080] font-montserrat font-semibold  mb-2'>Update Student</p>
                            </div>

                            <div className="Nom mt-2">
                                <input  onChange={handleNomChange} value={nom} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold border-gray-300 h-14 w-96 focus:border-[#222c39] duration-1000' placeholder='Nom' name='nom' required   />
                            </div>
                            <div className="prenom pt-2">
                                <input onChange={handlePrenomChange} value={prenom} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold border-gray-300 h-14 w-96 focus:border-[#222c39] duration-1000' placeholder='Prenom' name='prenom' required   />
                            </div>
                            <div className="email pt-2">
                                <input onChange={handleEmailChange} value={email} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold border-gray-300 h-14 w-96 focus:border-[#222c39] duration-1000' placeholder='Email' name='email' required   />
                            </div>
                            <div className="password pt-2">
                                <input onChange={handlePasswordChange} value={password} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold border-gray-300 h-14 w-96 focus:border-[#222c39] duration-1000' placeholder='Password' name='password' required  />
                            </div> 
                    
                            <div className="filiere pt-2">
                                <select name="fillieres" value={filliere} onChange={handleFilliereChange} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold border-gray-300 h-14 w-96 focus:border-[#222c39] duration-1000' id="fillieres">
                                    {
                                        fillieres.map((filliere) => <option value={filliere.nom}>{filliere.nom} </option> )
                                    }
                                </select>
                            </div> 
                            <div className="encadrant pt-2">
                            <select name="encadrants" value={encadrant} onChange={handleEncadrantChange} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold border-gray-300 h-14 w-96 focus:border-[#222c39] duration-1000' id="encadrants">
                                    {
                                        encadrants.map((encadrant) => <option value={encadrant.nom}>{encadrant.nom} {encadrant.prenom} </option> )
                                    }
                                </select>
                            </div>

                            <div className='flex justify-between items-center mt-2'>
                                <button onClick={handleSubmit} type='submit' className="mt-4 px-5 py-2 mr-32 text-[#354864] bg-[#ffffff] border border-1 border-[#354864] rounded-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
    </div>
  )
}

export default UpdateStudent