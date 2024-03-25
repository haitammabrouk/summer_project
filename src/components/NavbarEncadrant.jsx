import React from 'react'
import './css/navbarAdmin.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-ensak.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSession } from '../SessionContext';


function NavbarEncadrant() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const setIdNull = (id) => {
      id = null;
      window.location.reload();
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const {sessionId} = useSession();

  return (
    <div className='navbar-encadrant w-full'>
        <div className='header'>
        <aside id='sidebar' className={isSidebarOpen ? 'show' : '' }>
        <div className='sidebar_content sidebar_body'>
          <nav className='side_navlinks'>
            <ul className='flex items-center'>
              <li>
                <Link to='/students-page' className='flex items-center'> <span className='pl-4 pr-2'><FontAwesomeIcon icon={faGraduationCap} /></span><p className='text-sm pl-3'>Students</p>   </Link>
              </li>
              <li>
                <Link to='/profil-encadrant' className='flex items-center' > <span className='pl-4 pr-2' ><FontAwesomeIcon icon={faGear} /></span> <p className='text-sm pl-3'><span className='pr-1'>Account</span> Settings</p>  </Link>
              </li>
              <li>
                <Link to="/login" onClick={() => setIdNull(sessionId)} className='flex items-center'><span className='pl-5 pr-2'><FontAwesomeIcon icon={faRightFromBracket} /></span><p className='text-sm pl-3'>Deconnexion</p></Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className='header-content flex justify-between items-center pt-2 pb-2  pr-10 pl-10'>
        <div className='logo '>
          <Link to='/students-page' className='bg-[#ffff]'>
            <img src={logo} alt="" className="h-12 w-20" />
          </Link>
        </div>
        <div className={`hidden sm:block email-phone`}>
          <a href="mailto:contact.ensak@usms.ma" className='text-base text-[#565555] mt-2 font-montserrat text-sm hover:underline'>CONTACT.ENSAK@USMS.MA </a><span className='text-[#565555]'>/ +212 523 492 335</span>
        </div>
        <div className={`sidebar_toggler ${isSidebarOpen ? 'active' : '' }`} onClick={toggleSidebar}>
          <span className='text-[#2f4e62]'></span>
          <span className='text-[#2f4e62]'></span>
          <span className='text-[#2f4e62]'></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NavbarEncadrant