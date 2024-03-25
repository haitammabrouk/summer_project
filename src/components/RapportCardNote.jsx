import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function RapportCardNote({ id, domaine, sujet, structure, duree, description, handleClick, fileName }) {
  const [note, setNote] = useState();

  const [check, setCheck] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/rapport-note/${id}`, {
        note,
      })
      .then((response) => {
        console.log("has been added successfully");
        setCheck(true);
      })
      .catch((error) => {
        console.log("error setting rapport note ");
        console.log(note);
      });
  };

  return (
    <div className='rapport-card-note'>
      <div className='pt-24 mx-52'>
        <div className='first-section flex justify-center font-montserrat pl-3 py-8 w-full'>
          <div className='first-section-content pl-4'>
            <div className='first-section-form flex justify-center'>
              <form>
                <div className='flex justify-evenly items-start'>
                  <div className='flex flex-col justify-start text-left mr-48'>
                    <div className='flex justify-between items-center'>
                      <div className='domaine-div mt-6'>
                        <p className=''>
                          <span className='text-[#2f4e62] mr-3 font-semibold'>Domaine : </span>
                          {domaine}
                        </p>
                      </div>
                    </div>
                    <div className='sujet-div mt-6'>
                      <p className=''>
                        <span className='text-[#2f4e62] mr-3 font-semibold'>Sujet : </span> {sujet}
                      </p>
                    </div>
                    <div className='structure-div mt-6'>
                      <p>
                        <span className='text-[#2f4e62] mr-3 font-semibold'>Structure D'accueil : </span> {structure}
                      </p>
                    </div>
                    <div className='duree-div mt-6'>
                      <p>
                        <span className='text-[#2f4e62] mr-3 font-semibold'>Duree de Stage : </span>
                        {duree}
                      </p>
                    </div>
                    <div className='description-sujet mt-6 font-montserrat text-[#414141]'>
                      <p className='description'>{description}</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-around items-center'>
                    <div className='card-submission pt-8'>
                      <p className='text-[#2f4e62] mr-3 font-semibold text-left'>Project File: {fileName}</p>
                      <button className='border rounded-sm bg-[#2f4e62] text-[#ffffff] py-2 px-8 mt-3' onClick={handleClick}>
                        Download File
                      </button>
                    </div>
                    <form className='form-grade'>
                      <div className='submit-grade pt-8'>
                        <input
                          type='text'
                          placeholder='entrer la note'
                          value={note}
                          onChange={(e) => {
                            setNote(e.target.value);
                          }}
                          className='h-8 w-28'
                        />
                        <button onClick={handleSubmit} className='text-center ml-2 text-[#ffffff] bg-[#35465f] px-3 py-1'>
                          enter
                        </button>
                      </div>
                    </form>
                    {
                      check && <p className='text-sm text-[#326932] pr-4 pt-1'>La note a ete sauvegarde</p>
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RapportCardNote;
