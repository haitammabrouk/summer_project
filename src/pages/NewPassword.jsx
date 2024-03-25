import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import usePasswordToggler from '../components/usePasswordToggler'
import './css/NewPassword.css'

export default function NewPassword() {

    const [PasswordInputType, ToggleIcon] = usePasswordToggler();

    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [checkError, setCheckError] = useState(false);

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/reseting", null, {
        params: {
            password: password,
            token : token
        }
        })
        .then((response) => {
            console.log("success");
            setCheck(true);
            setCheckError(false);
            
        }).catch((error) => {
            setCheck(false);
            setCheckError(true);
        })
    }

  return (
    <div className='new-password w-full min-h-full'>
        <Navbar />
        <form onSubmit={handleSubmit} className='flex justify-center flex-col items-center mt-32 '>
                <div className="form-title  mr-4">
                    <p className='text-4xl font-montserrat font-semibold  mb-6'>Reset The Password</p>
                </div>
                {
                    check && (
                        <div className='mb-1'>
                            <p className=' mr-40 text-[#4a7846] font-montserrat text-sm'> The Password Reset Succesfully</p>
                        </div>
                    )
                }
                {
                    checkError && (
                        <div className='mb-1'>
                            <p className=' mr-20 text-[#894646] font-montserrat text-sm'> The Reset Link Has Been Expired, try again</p>
                        </div>
                    )
                }
                <div className="password-div ">
                    <input type={PasswordInputType} value={password} onChange={handlePasswordChange} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold border-gray-300 h-14 w-96 focus:border-[#222c39] duration-1000' placeholder='New Password' name='password'   />
                    <span className='password-toggle-icon '>{ToggleIcon}  </span>
                </div>
                <div className="btn-submit mb-10 mt-10">
                    <Button type="submit" text="SUBMIT" height='48px' textSize ='16px' width='390px' borderRadius="50px" borderShadow="0px 4px 10px rgba(0, 0, 0, 0.5)" />
                </div>
        </form> 

        <Footer />
    </div>
  )
}
