import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div>
        <div id='footer' className="footer bg-[#222c39] mt-32 pt-6 pb-16 flex justify-between">
            <div className="footer-section1">
                <div className="footer-title text-xl font-montserrat h-36 w-full text-left text-[#d0d0d0] pt-10 pl-14">
                    ENSA Khouribga
                    <p className='text-sm text-[#d0d0d0] font-montserrat'>Ensemble, nous sécurisons l'avenir.</p>
                </div>
                <div className="school-description pl-14">
                        <p className='text-left text-sm  text-[#c7c5c5] font-montserrat w-96'> L’ENSA dispense en formation initiale un enseignement supérieur destiné à former, principalement, des ingénieurs d’état hautement qualifiés d’un point de vue scientifique et technique.</p>
                </div>
            </div>
            <div className="footer-section2 pt-10">     
                <div className="school-contact ">
                    <p className='text-left text-sm  text-[#c7c5c5] font-montserrat w-96'> <span className='text-sm text-[#7eadf9] pr-2'><FontAwesomeIcon icon={faLocationDot} /> </span>    Ecole Nationale des Sciences Appliquées <br />
                        Bd Béni Amir, BP 77 <br /> Khouribga - Maroc.
                    </p>
                    <br />
                    <p className='text-left text-sm  text-[#c7c5c5] font-montserrat w-96'><span className='text-sm text-[#7eadf9] pr-2'><FontAwesomeIcon icon={faPhone} /> </span> +212523492335 / +212618534372</p> <br />
                    <p className='text-left text-sm  text-[#c7c5c5] font-montserrat w-96'><span className='text-sm text-[#7eadf9] pr-2'><FontAwesomeIcon icon={faFax} /> </span>0523492339</p> <br />
                    <p className='text-left text-sm  text-[#c7c5c5] font-montserrat w-96'><span className='text-sm text-[#7eadf9] pr-2'><FontAwesomeIcon icon={faEnvelope} /> </span>contact.ensak@usms.ma</p>
                </div>
            </div>
        </div>
        <div className="footer-right bg-[#2e3748] pt-6 pb-5 pl-14 text-xs flex justify-between">
            <p className='text-left text-[#c7c5c5] font-montserrat '>© COPYRIGHT 2022-2023. ENSA KHOURIBGA</p>
        </div>
    </div>
  )
}

export default Footer