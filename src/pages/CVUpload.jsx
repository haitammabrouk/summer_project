import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function CVUpload() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const [formations, setFormations] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [competences, setCompetences] = useState([]);
    const [langues, setLangues] = useState([]);
    const [loisirs, setLoisirs] = useState([]);

  useEffect(() => {
    // Parse the formations array from the query parameter and update state
    const formationsParam = params.get('formations');
    if (formationsParam) {
      setFormations(JSON.parse(formationsParam));
    }
    const experiencesParam = params.get('experiences');
    if (experiencesParam) {
      setExperiences(JSON.parse(experiencesParam));
    }
    const competencesParam = params.get('competences');
    if (competencesParam) {
      setCompetences(JSON.parse(competencesParam));
    }
    const languesParam = params.get('langues');
    if (languesParam) {
      setLangues(JSON.parse(languesParam));
    }
    const loisirsParam = params.get('loisirs');
    if (loisirsParam) {
      setLoisirs(JSON.parse(loisirsParam));
    }
  }, [params]);


    const [loader, setLoader] = useState(false);

    const downloadPdf = async () => {
        const capture = document.querySelector('.form');
        setLoader(true);
      
        try {
          const canvas = await html2canvas(capture, { scale: 2 });
          const imgData = canvas.toDataURL('image/png');
          const doc = new jsPDF('p', 'mm', 'a4');
          const componentWidth = doc.internal.pageSize.getWidth();
          const componentHeight = doc.internal.pageSize.getHeight();
          doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
          doc.save('form.pdf');
        } catch (error) {
          console.error('Error generating PDF:', error);
        } finally {
          
          setLoader(false);
          
        }
      };
    
  return (
    <div className='cv-upload w-full pb-10 flex justify-center pt-8'>
        <div className='cv-upload-content form '>
            <div className='section-1 flex justify-evenly items-center font-montserrat pr-64 pl-3'>
                <div className="img-holder pr-36 ">
                    <img className='h-40 w-40 pr-2' src={params.get("selectedImage")} alt="" />
                </div>
                <div className=' '>
                    <div className='fullname text-4xl  text-[#7681b8]'>
                        <p>{params.get('nom').toUpperCase()} {params.get('prenom').toUpperCase()}</p>
                    </div>
                    <div className="profil mt-2 ml-1">
                        <p className='text-left text-[#3f466a]'> {params.get('profil').toUpperCase()}</p>
                    </div>
                </div>
            </div>
            <div className="section-2 font-montserrat mt-12 py-1 px-3">
                <p className='text-left text-xl border-b border-[#dedcdc] border-1 pb-3'>
                Informations personnelles
                </p>
                <div className="info-pers text-left mt-4 flex justify-between ">
                    <div className='labels text-[#7681b8]'>
                        <p className='pt-1'>Adresse e-mail</p>
                        <p className='pt-1'>Numéro de téléphone</p>
                        <p className='pt-1'>Adresse</p>
                        <p className='pt-1'>Ville</p>
                    </div>
                    <div className='donnees'>
                        <p className='pt-1'>{params.get('email')}</p>
                        <p className='pt-1'>{params.get('phone')}</p>
                        <p className='pt-1'>{params.get('adresse')}</p>
                        <p className='pt-1'>{params.get('ville')}</p>
                    </div>
                </div>
            </div>
            <div className="section-3 font-montserrat mt-5 py-1 px-3">
                <p className='text-left text-xl border-b border-[#dedcdc] border-1 pb-3'>
                Formation
                </p>
                <ul>
                    {formations.map((formation, index) => (
                    <li key={index}>
                        <div className="info-pers text-left mt-4 flex justify-between">
                            <div className='labels text-[#7681b8]'>
                                <p className='pt-1'>{formation['date-debut']} <br />à <br />{formation['date-fin']} </p>
                            </div>
                            <div className='donnees'>
                                <p className='pt-1'>{formation['formation']} </p>
                                <p className='pt-1'>{formation['etab']}, {formation['ville-form']} </p>
                                <p className='pt-1'>{formation['description']} </p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="section-4 font-montserrat mt-5 py-1 px-3">
                <p className='text-left text-xl border-b border-[#dedcdc] border-1 pb-3'>   
                Expérience professionnelle
                </p>
                <ul>
                {experiences.map((experience, index) => (
                    <li key={index}>
                        <div className="info-pers text-left mt-4 flex justify-between">
                            <div className='labels text-[#7681b8]'>
                                <p className='pt-1'> {experience['date-debut-exp']} <br />à <br />{experience['date-fin-exp']} </p>
                            </div>
                            <div className='donnees'>
                                <p className='pt-1'>{experience['poste']} </p>
                                <p className='pt-1'>{experience['employeur']}, {experience['ville-exp']} </p>
                                <p className='pt-1'>{experience['description-exp']} </p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="section-5 font-montserrat mt-5 py-1 px-3">
                <p className='text-left text-xl border-b border-[#dedcdc] border-1 pb-3'>   
                Compétence
                </p>
                <ul>
                {competences.map((competence, index) => (
                    <li key={index}>
                        <div className="info-pers text-left mt-4 ">
                            <div className='donnees'>
                                <p className='pt-1'>{competence['competence']} </p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="section-6 font-montserrat mt-5 py-1 px-3">
                <p className='text-left text-xl border-b border-[#dedcdc] border-1 pb-3'>   
                Langue
                </p>
                <ul>
                {langues.map((langue, index) => (
                    <li key={index}>
                        <div className="info-pers text-left mt-4 ">
                            <div className='donnees'>
                                <p className='pt-1'>{langue['langue']} </p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="section-4 font-montserrat mt-5 py-1 px-3">
                <p className='text-left text-xl border-b border-[#dedcdc] border-1 pb-3'>    
                Centres d'intérêt
                </p>
                <ul>
                {loisirs.map((loisir, index) => (
                    <li key={index}>
                        <div className="info-pers text-left mt-4 flex ">
                            <div className='donnees'>
                                <p className='pt-1'>{loisir['loisir']} </p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className='mt-10'>
                <button className={`text-[#ffffff] px-3 py-2 border rounded-md bg-[#34405b] `} onClick={downloadPdf} disabled={loader}>
                    {loader ? 'Generating...' : 'UPLOAD'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default CVUpload