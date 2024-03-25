import React from 'react'
import './css/navbarAdmin.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-ensak.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSession } from '../SessionContext';

function NavbarAdmin() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const {sessionId} = useSession();

    const setIdNull = (id) => {
      id = null;
      window.location.reload();
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className='navbar-admin w-full'>
        <div className='header'>
        <aside id='sidebar' className={isSidebarOpen ? 'show' : '' }>
        <div className='sidebar_content sidebar_body'>
          <nav className='side_navlinks'>
            <ul className='flex items-center'>
              <li>
                <Link to='/admin-page' className='flex items-center'> <span className='pl-4 pr-2'><FontAwesomeIcon icon={faChartLine} /></span><p className='text-sm pl-3'>Dashboard</p>   </Link>
              </li>
              <li>
                <Link to='/structure' className='flex items-center' > <span className='pl-4 pr-2' ><FontAwesomeIcon icon={faBuilding} /></span> <p className='text-sm pl-3'><span className='pr-1'>Structures</span> D'accueil</p>  </Link>
              </li>
              <li>
                <Link to='/archive-admin' className='flex items-center' > <span className='pl-4 pr-2'><FontAwesomeIcon icon={faFile} /></span> <p className='text-sm pl-3'>Archive</p> </Link>
              </li>
              <li>
                <Link to='/manage' className='flex items-center' > <span className='pl-4 pr-2'><FontAwesomeIcon icon={faGears} /></span><p className='text-sm pl-3'> Manage Accounts</p> </Link>
              </li>
              <li>
                <Link to='/depot' className='flex items-center' > <span className='pl-5 pr-2'><FontAwesomeIcon icon={faFolder} /></span><p className='text-sm pl-3'> Depot Rapports</p> </Link>
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
          <Link to='/admin-page' className='bg-[#ffff]'>
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

export default NavbarAdmin