import React, {useState, useEffect} from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import axios from 'axios'
import FilliereCardAdmin from '../components/FilliereCardAdmin';
import { useSession } from '../SessionContext';
import Login from './Login';

function ArchiveAdmin() {

    const [fillieres, setFillieres] = useState([]);

    const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/get-fillieres`)
        .then((response) => {
            setFillieres(response.data);
        }).catch((error) => {
            console.log("error fetching fillieres informations ");
        });
      }, []);

  return (
    
    checkId(sessionId) ? <Login /> : (
        <div className='archive-admin min-h-full w-full'>
        <NavbarAdmin />
        <div className="archive pt-10">
            <div className="archive-title">
                <p className='text-base font-montserrat  text-[#545454] underline'>Dans Cette Espace vous pouvez Consulter L'Archive</p>
            </div>
            <div className="archive-content pt-10 flex justify-center">
                <ul className='filliere-cards flex flex-wrap pl-5'>
                    {
                        fillieres.map((filliere) => 
                            <li key={filliere.id}><FilliereCardAdmin nom = {filliere.nom} /> </li>
                        )
                    }
                </ul>
            </div>
        </div>
        
    </div>
    )

  )

}

export default ArchiveAdmin