import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './css/Manage.css';
import AddStudent from '../components/AddStudent';
import axios from 'axios';
import UpdateStudent from '../components/UpdateStudent';
import NavbarAdmin from '../components/NavbarAdmin';
import { useSession } from '../SessionContext';
import Login from './Login';
import { Link } from 'react-router-dom';

function Manage() {

    const [check, setCheck] = useState(false);
    const [checkUpdate, setCheckUpdate] = useState(false);

    const [etudiants, setEtudiants] = useState([]);
    const [id, setId] = useState();

    const [search, setSearch] = useState('');

    const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    const handleDelete = (e, idE) => {
        axios.delete(`http://localhost:8080/etudiant/${idE}`)
        .then(() => console.log("The student has been deleted succesfully"))
        .catch(() => console.log("An error has occured !!"))
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/get-etudiants`)
        .then((response) => {
            setEtudiants(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log("error fetching etudiants informations ", error);
        });
    });

    const handleAddStudent = (e) => {
        setCheck(!check);
    }

    const handleUpdateStudent = (e, idE) => {
        setCheckUpdate(!checkUpdate);
        setId(idE);
    }


    return (
        checkId(sessionId) ? <Login /> : (
            <div className='container w-full min-h-full '>
            <NavbarAdmin />
            <div className="crud flex flex-col items-center p-3 mb-25 pt-28">
                <div className="flex space-x-8 flex flex-col">
                    <div className="mt-5 mb-4  ">
                        <h2 className="text-2xl text-center  text-[#2e3748]  font-montserrat">Student Informations</h2>
                    </div>
                    <div className='flex justify-evenly items-center  '>
                        <div className="search ">
                            <form className="form-inline ">
                                <input
                                    className="form-input px-3 py-1 rounded-lg border focus:outline-none focus:border-[#2e3748]"
                                    type="search"
                                    placeholder="Rechercher par le nom" onChange={(e) => setSearch(e.target.value)}
                                />
                            </form>
                        </div>
                        <div className="add">
                            <button
                                className="px-3 py-1 rounded-lg bg-[#2e3748] text-white font-montserrat"
                                onClick={handleAddStudent}
                            >
                                Add New Student
                            </button>
                        </div>
                    </div>
                <div className="table mt-8 font-montserrat ">
                    <table className="table table-bordered mr-10">
                        <thead className='bg-[#425773] text-base font-extralight'>
                        <tr className='font-thin text-[#ffffff]'>
                                <th className="px-6 py-2">CNE</th>
                                <th className="px-6 py-2">NOM</th>
                                <th className="px-6 py-2">PRENOM</th>
                                <th className="px-6 py-2">EMAIL</th>
                                <th className="px-6 py-2">PASSWORD</th>
                                <th className="px-6 py-2">FILIERE</th>
                                <th className="px-6 py-2"> ENCADRANT</th>
                                <th className="px-6 py-2">ACTIONS</th>
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
                                    <td className="border px-3 py-2">{elt.email}</td>
                                    <td className="border px-3 py-2">{elt.password}</td>
                                    <td className="border px-3 py-2">{elt.nomFilliere}</td>
                                    <td className="border px-3 py-2">{elt.nomEncadrant}</td>
                                    <td>
                                        
                                        <button onClick={(e) => handleUpdateStudent(e, elt.idE)} className="update pr-3">
                                            <span className="text-[#1e9433] ml-2 mr-4">
                                                <FontAwesomeIcon icon={faPen} />
                                            </span>
                                        </button>
                                        <Link to='/manage' onClick={(e) => handleDelete(e, elt.idE)} className="delete">
                                            <span className="text-[#bd4541]">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
            </div>
            <div className='mt-28'>
                {
                    check && (
                        <AddStudent />
                    )
                }
                {
                    checkUpdate && (
                        <UpdateStudent id = {id} />
                    )
                }
            </div>
        </div>
        )
    )
}

export default Manage;
