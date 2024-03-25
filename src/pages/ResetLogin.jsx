import React from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function ResetLogin() {

    const [email, setEmail] = useState('');
    const [check, setCheck] = useState(false);

    let navigate = useNavigate()

    const hanldeEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/reset", null, {
        params: {
            email: email
        }
        })
        .then((response) => {
            console.log("success");
            navigate("/verification");
            
        }).catch((error) => {
            console.log("error");
            console.log(email)
            setCheck(true);
        })
    }

  return (
    <div className='resetLogin w-full min-h-full '>
        <Navbar />
        <form  onSubmit={handleSubmit} className='flex justify-center flex-col items-center mt-32 '>
                <div className="form-title ">
                    <p className='text-4xl font-montserrat font-bold mb-5 mr-20'>Reset Password</p>
                    <p className='mr-2 text-sm text-[#767373] font-montserrat'>
                        Enter the email associated with your account and we'll <br /> send an email with instructions to reset your password
                    </p>
                </div>

                <div className="username-div mt-14">
                    <input type="text" value={email} onChange={hanldeEmailChange} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold border-gray-300 h-14 w-96 focus:border-[#222c39] duration-1000' placeholder='Email' name='email'   />
                </div>
                <p className='text-base text-[#597191] mr-32 mt-4 font-semibold font-montserrat'> <Link to="/login">Wait, I remember my password</Link></p>
                <div className="btn-submit mt-10">
                    <Button type="submit" text="RESET" height='48px' textSize ='16px' width='390px' borderRadius="50px" borderShadow="0px 4px 10px rgba(0, 0, 0, 0.5)" />
                </div>
        </form> 
        {
            check && (
                <div>
                    <p className='text-sm mt-5 font-montserrat text-[#702d2d]'>The email doesnt exist</p>
                </div>
            )
        }
        <Footer />
    </div>
  )
}

export default ResetLogin