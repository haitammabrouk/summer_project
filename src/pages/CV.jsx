import React, { useState } from 'react';
import Footer from '../components/Footer';
import ImageUpload from '../components/ImageUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Formation from '../components/Formation';
import Competence from '../components/Competence';
import Langue from '../components/Langue';
import Loisir from '../components/Loisir';
import Experience from '../components/Experience';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CV() {
  const [formations, setFormations] = useState([]);
  const [competences, setCompetences] = useState([]);
  const [langues, setLangues] = useState([]);
  const [loisirs, setLoisirs] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [profil, setProfil] = useState('');
  const [phone, setPhone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [ville, setVille] = useState('')
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();


  const grabeImage = (selectedImage) => {
    const imageURL = URL.createObjectURL(selectedImage);
    setSelectedImage(imageURL)
  }

  const handleFormationChange = (index, field, value) => {
    const updatedFormations = [...formations];
    updatedFormations[index] = {
      ...updatedFormations[index],
      [field]: value,
    };
    setFormations(updatedFormations);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setExperiences(updatedExperiences);
  };

  const handleCompetenceChange = (index, field, value) => {
    const updatedCompetences = [...competences];
    updatedCompetences[index] = {
      ...updatedCompetences[index],
      [field]: value,
    };
    setCompetences(updatedCompetences);
  };

  const handleLangueChange = (index, field, value) => {
    const updatedLangues = [...langues];
    updatedLangues[index] = {
      ...updatedLangues[index],
      [field]: value,
    };
    setLangues(updatedLangues);
  };

  const handleLoisirChange = (index, field, value) => {
    const updatedLoisirs = [...loisirs];
    updatedLoisirs[index] = {
      ...updatedLoisirs[index],
      [field]: value,
    };
    setLoisirs(updatedLoisirs);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams({
      nom,
      prenom,
      phone,
      email,
      ville,
      adresse,
      profil,
      selectedImage,
      formations: JSON.stringify(formations),
      experiences : JSON.stringify(experiences),
      competences : JSON.stringify(competences),
      langues : JSON.stringify(langues),
      loisirs : JSON.stringify(loisirs),
    }).toString();
    navigate(`/cv-upload?${params}`);
  };


  const handleClickFormations = () => {
    setFormations([...formations, true]);
  };

  const handleClickCompetences = () => {
    setCompetences([...competences, true]);
  };

  const handleClickLangues = () => {
    setLangues([...langues, true]);
  };

  const handleClickLoisirs = () => {
    setLoisirs([...loisirs, true]);
  };

  const handleClickExp = () => {
    setExperiences([...experiences, true]);
  };

  return (
    <div className='cv w-full min-h-full '>
      <Navbar />
      <form onSubmit={handleSubmit}>
      <div className="cv-content flex justify-center ">
        <div>
          <div>
            <p className='text-2xl font-montserrat text-[#6b6b6b] pt-5 mb-16 mt-3'>Informations personnelles</p>
          </div>
          <div className='flex pl-60'>
            <div className="image-holder  mr-6 mt-1 bg-[#F4F4F5]">
              <ImageUpload grabeImage={grabeImage} />
            </div>
            <div className='font-montserrat text-[#414141]'>
              <div className='flex mb-5'>
                <div className='prenom pr-4'>
                  <label htmlFor="prenom " className='block text-left'>Prénom</label>
                  <input className='bg-[#F4F4F5] w-52 h-9 pl-2' type="text" id='prenom' value={prenom} name='prenom' onChange={(e) => setPrenom(e.target.value)} required />
                </div>
                <div className='nom'>
                  <label htmlFor="nom" className='block text-left'>Nom de famille</label>
                  <input className='bg-[#F4F4F5] w-52 h-9 pl-2' type="text" id='nom ' name='nom' value={nom} onChange={(e) => setNom(e.target.value)} required />
                </div>
              </div>
              <div className='email'>
                <label htmlFor="email" className='block text-left'>Adresse e-mail</label>
                <input className='bg-[#F4F4F5] w-input h-9 mr-64 pl-2 ' type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
          </div>
          <div className='ml-20 mt-5 font-montserrat text-[#414141]'>
            <div className='titre '>
              <label htmlFor="titre" className='block text-left ml-40'>Titre du profil</label>
              <input className='bg-[#F4F4F5] w-text h-9 mr-24 pl-2' type="text" id='titre' name='titre' value={profil} onChange={(e) => setProfil(e.target.value)} required />
            </div>
            <div className='num mt-3'>
              <label htmlFor="num" className='block text-left ml-40'>Numéro de téléphone</label>
              <input className='bg-[#F4F4F5] w-text h-9 mr-24 pl-2' type="text" id='num' name='num' value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className='adresse mt-3'>
              <label htmlFor="adresse" className='block text-left ml-40'>Adresse</label>
              <input className='bg-[#F4F4F5] w-text h-9 mr-24 pl-2' type="text" id='adresse' name='adresse' value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
            </div>
            <div className='ville mt-3'>
              <label htmlFor="ville" className='block text-left ml-40'>Ville</label>
              <input className='bg-[#F4F4F5] w-text h-9 mr-24 pl-2' type="text" id='ville' name='ville' value={ville} onChange={(e) => setVille(e.target.value)} required />
            </div>
          </div>
          <p className='text-xl font-montserrat mt-10'>Formation</p>
          {formations.map((formation, index) => (
            <Formation key={index}
            formation={formation}
            handleFormationChange={(field, value) => handleFormationChange(index, field, value)}
            />
          ))}
          <div className="formation-btn ">
            <button
              className='border border-b-1 border-[#637395] rounded-md px-3 py-1 mt-3 mr-96 '
              onClick={handleClickFormations}
            >
              <span className='mr-2'><FontAwesomeIcon icon={faPlus} /></span>Ajouter une formation
            </button>
          </div>
          <p className='text-xl font-montserrat mt-10'>Expérience professionnelle</p>
          {experiences.map((experience, index) => (
            <Experience key={index}
            experience={experience}
            handleExperienceChange={(field, value) => handleExperienceChange(index, field, value)}
             />
          ))}
          <div className="experience-btn ">
            <button
              className='border border-b-1 border-[#637395] rounded-md px-3 py-1 mt-3 mr-96'
              onClick={handleClickExp}
            >
              <span className='mr-2'><FontAwesomeIcon icon={faPlus} /></span>Ajouter une expérience
            </button>
          </div>

          <p className='text-xl font-montserrat mt-10'>Compétences</p>
          {competences.map((competence, index) => (
            <Competence key={index}
            competence={competence}
            handleCompetenceChange={(field, value) => handleCompetenceChange(index, field, value)}
             />
          ))}
          <div className="competence-btn ">
            <button
              className='border border-b-1 border-[#637395] rounded-md px-3 py-1 mt-3 mr-96'
              onClick={handleClickCompetences}
            >
              <span className='mr-2'><FontAwesomeIcon icon={faPlus} /></span>Ajouter une compétence
            </button>
          </div>
          <p className='text-xl font-montserrat mt-10'>Langues</p>
          {langues.map((langue, index) => (
            <Langue key={index}
            langue={langue}
            handleLangueChange={(field, value) => handleLangueChange(index, field, value)} />
          ))}
          <div className="langue-btn ">
            <button
              className='border border-b-1 border-[#637395] rounded-md px-3 py-1 mt-3 mr-96'
              onClick={handleClickLangues}
            >
              <span className='mr-2'><FontAwesomeIcon icon={faPlus} /></span>Langues
            </button>
          </div>
          <p className='text-xl font-montserrat mt-10'>
            Centres d'intérêt
            </p>
          {loisirs.map((loisir, index) => (
            <Loisir key={index}
            loisir={loisir}
            handleLoisirChange={(field, value) => handleLoisirChange(index, field, value)} />
          ))}
          <div className="langue-btn ">
            <button
              className='border border-b-1 border-[#637395] rounded-md px-3 py-1 mt-3 mr-96'
              onClick={handleClickLoisirs}
            >
              <span className='mr-2'><FontAwesomeIcon icon={faPlus} /></span>
                  Ajouter un centres d'intérêt

            </button>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Button text={'SUBMIT'} type={'submit'} />
      </div>
      </form>
      <Footer />
    </div>
  );
}

export default CV;
