import React from 'react';
import logo from '../assets/logo-ensak.png';
import user from '../assets/user-logo.png';
import './css/navbarStudent.css'
import './css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSession } from '../SessionContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

function NavbarStudent() {

  const {sessionId} = useSession();

  const setIdNull = (id) => {
    id = null;
    window.location.reload();
  }

  const [etudiant, setEtudiant] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8080/etudiant/${sessionId}`)
        .then((response) => {
            setEtudiant(response.data);
        }).catch((error) => {
            console.log("error fetching etudiant informations ", error);
        });
    });



  return (
    <div className='navbar-student bg-transparent w-full flex items-center  justify-between px-6 pt-2 pb-2'>
      <div className="logo">
        <Link to="/submission">
          <img src={logo} alt="" className="h-12 w-20" />
        </Link>
      </div>
      <div className='flex justify-between items-center font-montserrat'>
        <ul className='links flex pr-8 justify-between text-[#567092]  font-medium'>
          <div className='mr-72 flex justify-evenly'>
            <li className='px-2  mr-3 rounded-md hover:text-[#2e3748] transition duration-700 '> <Link to='/structure-consultation' > <span className='pr-1'><FontAwesomeIcon icon={faMagnifyingGlass} /></span> <span className='pr-1'>Structures</span> D'accueil</Link></li>
            <li className='px-2  mr-3 rounded-md hover:text-[#2e3748] transition duration-700 '><Link to='/submission' > <span className='pr-1'><FontAwesomeIcon icon={faFolderPlus} /></span> <span className='pr-1'>Dépôt De Rapport </span> </Link></li>
          </div>

          <li className='pr-5 hover:text-[#2e3748] transition duration-700'><Link to='/'>Tuto</Link></li>
          <li className='pr-5 hover:text-[#2e3748] transition duration-700'><Link to="/archive-etudiant">Archive</Link></li>
          <li className='hover:text-[#2e3748] transition duration-700'><a href="#footer">Contact</a></li>
          
        </ul>
        <div className="navbar-content flex items-center">
            <div className="user">
                <div class="dropdown">
                    <button class="dropbtn">
                        <Link to='/profil'>
                            <img src={user} alt="" className="w-20 h-11" />
                        </Link>
                    </button>
                    <div class="dropdown-content text-sm text-left">
                        <div className='student-details'>
                            <div className="img-user-drop flex justify-evenly items-center">
                                <div className=' px-5 py-6 w-full border-b border-[#8c8a8a] border-b-1'>
                                    {
                                      etudiant ? (
                                        <div>
                                            <Link to='/profil' className='text-base font-sans font-bold hover:text-[#3a6e88] pb-1'>{etudiant.nom} </Link>
                                            <p className='text-xs font-montserrat'>{etudiant.email} </p>
                                        </div>
                                      ) : (
                                        <p>.......loading .......</p>
                                      )
                                    }
                                </div>
                            </div>
                            <div className="student-infos-drop">

                            </div>
                        </div>
                        <div className="links">
                            <Link to="/details" className='px-3 py-3 hover:text-[#58579b]'>PFE - Details</Link>
                            <Link to="/profil" className='px-3 py-3 hover:text-[#58579b]'>Paramètres Du Compte</Link>
                            <Link to="/login" onClick={() => setIdNull(sessionId)} className='px-3 py-3 hover:text-[#58579b]'>Deconnexion</Link>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarStudent