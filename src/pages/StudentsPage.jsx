import React from 'react'
import { useSession } from '../SessionContext';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NavbarEncadrant from '../components/NavbarEncadrant';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function StudentsPage() {

    const navigate = useNavigate();

    const [etudiants, setEtudiants] = useState([]);

    const [search, setSearch] = useState('');
    const [studentNotes, setStudentNotes] = useState({});

    const {sessionId} = useSession();

    const {setId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/get-etudiants-encadrant/${sessionId}`)
        .then((response) => {
            setEtudiants(response.data);
        }).catch((error) => {
            console.log("error fetching etudiants informations ", error);
        });
    }, [sessionId]);

    const handleClick = (idE) => {
        setId(idE);
        navigate('/etudiant-rapport');
    }    

  useEffect(() => {
    etudiants.forEach((student) => {
      axios
        .get(`http://localhost:8080/rapport/${student.idE}`)
        .then((response) => {
          // Store the rapport and note data in the state
          setStudentNotes((prevNotes) => ({
            ...prevNotes,
            [student.idE]: {
              rapport: response.data,
              note: response.data.note,
            },
          }));
        })
        .catch((error) => {
          console.log('error fetching etudiants informations ', error);
        });
    });
  }, [etudiants]);

  const checkNote = (note) => {
    if(note === 0){
        return "pas encore"
    }else{
        return note
    }
  }

    

  return (
    
    checkId(sessionId) ? <Login /> : (
        <div className='students-page min-h-full w-full'>
        <NavbarEncadrant />
            <div className="crud flex flex-col items-center p-3 mb-25 pt-28">
                <div className="flex space-x-8 flex flex-col">
                    <div className="mt-5 mb-4  ">
                        <h2 className="text-2xl text-center  text-[#2e3748]  font-montserrat">Student Informations</h2>
                    </div>
                    <div className='flex justify-center items-center  '>
                        <div className="search ">
                            <form className="form-inline ">
                                <input
                                    className="form-input px-3 py-1 rounded-lg border focus:outline-none focus:border-[#2e3748]"
                                    type="search"
                                    placeholder="Rechercher par le nom" onChange={(e) => setSearch(e.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                <div className="table mt-8 font-montserrat ">
                    <table className="table table-bordered mr-10">
                        <thead className='bg-[#425773] text-base font-extralight'>
                        <tr className='font-thin text-[#ffffff]'>
                                <th className="px-6 py-2">CNE</th>
                                <th className="px-6 py-2">NOM</th>
                                <th className="px-6 py-2">PRENOM</th>
                                <th className="px-6 py-2">FILIERE</th>
                                <th className="px-6 py-2">Voir PFE</th>
                                <th className="px-6 py-2">Note PFE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {etudiants.filter((elt) => {
                                return search.toLowerCase() === '' ? elt : elt.nom.toLowerCase().includes(search);
                            } ).map((elt) => (
                                <tr key={elt.cne}>
                                    <td className="border px-3 py-2">{elt.idE}</td>
                                    <td className="border px-3 py-2">{elt.nom}</td>
                                    <td className="border px-3 py-2">{elt.prenom}</td>
                                    <td className="border px-3 py-2">{elt.nomFilliere}</td>
                                    <td className="border px-3 py-2">
                                        <button onClick={() => handleClick(elt.idE)} className='text-center text-[#ffffff] bg-[#35465f] px-3 py-1'>Voir</button>
                                    </td>
                                    <td>
                                        {
                                            studentNotes[elt.idE] && checkNote(studentNotes[elt.idE].note)
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
    )

  )
}

export default StudentsPage