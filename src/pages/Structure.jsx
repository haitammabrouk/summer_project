import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import Button from '../components/Button'
import StructureCard from '../components/StructureCard'
import axios from 'axios'
import Login from './Login'
import { useSession } from '../SessionContext'

function Structure() {

  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const [check, setCheck] = useState(false);

  const [search, setSearch] = useState('');

  const [structures, setStructures] = useState([]);

  const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }

  useEffect(() => {
    axios.get(`http://localhost:8080/get-structures`)
    .then((response) => {
        setStructures(response.data);
    }).catch((error) => {
        console.log("error fetching structures informations ");
    });
  });

  const handleNomChange = (e) => {
    setNom(e.target.value);
  }
  const handleAdresseChange = (e) => {
    setAdresse(e.target.value);
  }
  const handleNumeroChange = (e) => {
    setNumero(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/structures', {
        nom, 
        adresse,
        numero,
        email,
        description
    })
    .then((response) => {
      console.log("has been added succefully")
        setCheck(true);

    }).catch((error) => {
        console.log("error adding new structure ");
        setCheck(false);
    });        
}

  return (
    
    checkId(sessionId) ? <Login /> : (
      <div className='structure min-h-full w-full'>
        <NavbarAdmin  />
        <div className='add-structure pt-20'>
          <div className="add-structure-title ">
            <p className='text-base font-montserrat  text-[#545454] underline'>Dans Cette Espace vous pouvez Ajouter une Structure D'acceuil</p>
          </div>
          <div className="add-structure-content">
            <div className='structure-infos mt-6 border border-1 border-[#4c759b] pl-8 py-6 mx-72 rounded-md'>
              <form onSubmit={handleSubmit}>
                  <div className='pb-4 pl-3 '>
                    <div className='structure-infos mt-5 font-montserrat text-[#414141]'>
                        <label htmlFor="nom" className='block text-left'>Nom De La Structure : </label>
                        <input className='bg-[#F4F4F5] w-text h-9 pl-2 mt-3 block' value={nom} type="text"  id='nom' name='nom' onChange={handleNomChange}  required />
                    </div>
                    <div className='adresse mt-5 font-montserrat text-[#414141]'>
                        <label htmlFor="adresse" className='block text-left '>Adresse : </label>
                        <input className='bg-[#F4F4F5] w-text h-9 pl-2 mt-3 block' type="text" value={adresse}  id='adresse' name='adresse' onChange={handleAdresseChange} required />
                    </div>
                    <div className='num mt-5 font-montserrat text-[#414141]'>
                        <label htmlFor="num" className='block text-left'>Numero Fixe :</label>
                        <input className='bg-[#F4F4F5] w-text h-9 pl-2 block mt-3' type="text" value={numero}  id='num' name='num' onChange={handleNumeroChange} required />
                    </div>
                    <div className='email mt-5 font-montserrat text-[#414141]'>
                        <label htmlFor="email" className='block text-left'>Email :</label>
                        <input className='bg-[#F4F4F5] w-text h-9 pl-2 block mt-3' type="text" value={email}  id='email' name='email' onChange={handleEmailChange} required />
                    </div>
                    <div className='description mt-5 font-montserrat text-[#414141]'>
                        <label htmlFor="description" className='block text-left '>Description :</label>
                        <textarea name="description" id="description" className='bg-[#F4F4F5] pl-2 w-text  block mt-3' value={description} onChange={handleDescriptionChange}  cols="100" rows="6"></textarea>
                    </div>
                  </div>
                  <div>
                  {
                      check && (
                        <div className='mb-1 text-left ml-3'>
                            <p className=' mr-32 text-[#447d4c] font-montserrat text-sm'> Has Been Created Succefully !!</p>
                        </div>
                      )
                    }
                  </div>
                  <div className="btn-submit mt-3 mr-10 flex justify-end">
                    <Button type='submit' text='Ajouter' />
                  </div>
                </form>
            </div>
          </div>
          <div className=''>
          <div className="search-card mt-8 mr-96 pr-24">
              <form className="search-form ">
                                <input
                                    className="form-input px-3 py-1 rounded-lg border-[#2e3748] border focus:outline-none "
                                    type="search"
                                    placeholder="Rechercher par le nom" onChange={(e) => setSearch(e.target.value)}
                                />
              </form>
            </div>
            <div className="structure-cards mx-72 mt-8 ">
              <ul>
                {
                  structures.filter((elt) => {
                    return search.toLowerCase() === '' ? elt : elt.nom.toLowerCase().includes(search);
                } ).slice().reverse().map((structure) => <li><StructureCard adresse={structure.adresse} description={structure.description} email={structure.email} nom={structure.nom} numero={structure.numero}  /> </li>  )
                }
              </ul>
            </div>
          </div>
        </div>
    </div>
    )

  )
}

export default Structure