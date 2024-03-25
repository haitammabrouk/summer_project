import React, {useState} from 'react'
import NavbarAdmin from '../components/NavbarAdmin';
import RapportCard from '../components/RapportCard';
import { useSession } from '../SessionContext';
import Login from './Login';

function ArchiveAdminFiles() {

    const {rapports} = useSession();
    const [search, setSearch] = useState('');

    const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

  return (
    
    checkId(sessionId) ? <Login /> : (
        <div className='archive-admin-files min-h-full w-full'>
        <NavbarAdmin />
        <div className="project-files pt-10">
        <div className="archive-title">
                <p className='text-base font-montserrat text-[#545454] underline'>Dans Cette Espace vous pouvez Consulter L'Archive</p>
            </div>
            <div className="search-card mt-8 mr-96 pr-24">
              <form className="search-form ">
                                <input
                                    className="form-input px-3 py-1 rounded-lg border-[#2e3748] border focus:outline-none "
                                    type="search"
                                    placeholder="Rechercher par Domaine" onChange={(e) => setSearch(e.target.value)}
                                />
              </form>
            </div>
            <div className="archive-content pt-10 flex justify-center">
                <ul className='rapport-cards flex flex-wrap pl-14'>
                {
                    rapports.filter((rapport) => {
                        return search.toLowerCase() === '' ? rapport : rapport.domaine.toLowerCase().includes(search);
                    } ).map((rapport) => 

                        rapport.valide &&

                        <li key={rapport.idR}><RapportCard domaine = {rapport.domaine} sujet = {rapport.sujet}
                        description = {rapport.description} id={rapport.idR}  /> </li>
                    )
                }
                </ul>
            </div>
        </div>
    </div>
    )

  )
}

export default ArchiveAdminFiles