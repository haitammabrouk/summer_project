import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function EmailVerification() {
  return (
    <div className='email-verification w-full min-h-full '>
        <Navbar/>
        <div className="email-content flex justify-center mt-10">
            
            <div className="verification-box flex justify-around bg-[#ACD2CC]  text-left py-3 px-4">
                <div className="clear mr-3">
                    <FontAwesomeIcon icon={faCircleCheck} size="2x" />
                </div>
                <div>
                    <p className='text-base font-semibold font-montserrat pt-1'>Password reset email sent</p>
                    <p className='text-sm font-normal font-montserrat mt-1 '>You should soon receive an email allowing you to <br /> reset your password. If you do not find this email, <br />please check your spam folder and trash</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default EmailVerification