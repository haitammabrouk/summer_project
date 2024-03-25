import React from 'react';
import logo from '../assets/logo-ensak.png';
import user from '../assets/user-logo.png';
import Button from './Button';
import './css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar  bg-transparent w-full flex items-center  justify-between px-6 pt-2 pb-2">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" className="h-12 w-20" />
        </Link>
      </div>
      <div className='flex justify-between items-center font-montserrat'>
        <ul className='links flex pr-8 justify-between text-[#567092]  font-medium'>
          <li className='px-4  mr-4 rounded-md hover:text-[#2e3748] transition duration-700 '><Link to='/structure-consultation-utilisateur' > <span className='pr-2'><FontAwesomeIcon icon={faMagnifyingGlass} /></span> <span className='pr-1'>Structures</span> D'accueil</Link></li>
          <li className='px-4  mr-72 rounded-md hover:text-[#2e3748] transition duration-700 '><Link to='/cv' > <span className='pr-2'><FontAwesomeIcon icon={faFile} /></span> <span className='pr-1'>Générer </span> CV</Link></li>
          <li className='pr-6 hover:text-[#2e3748] transition duration-700'><Link to='/'>Tuto</Link></li>
          <li className='pr-6 hover:text-[#2e3748] transition duration-700'><Link to="/archive-utilisateur">Archive</Link></li>
          <li className='hover:text-[#2e3748] transition duration-700'><a href="#footer">Contact</a></li>

          
        </ul>
        <div className="navbar-content flex items-center">
          <Link to='/login'>
            <Button text="Sign in" />
          </Link>
          <div className="user">
            <Link to='/login'>
              <img src={user} alt="" className="w-20 h-11" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
