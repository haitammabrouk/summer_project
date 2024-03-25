import React from 'react'
import login from '../assets/user-logo.png'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import usePasswordToggler from '../components/usePasswordToggler'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../SessionContext'

function Login() {

    const [PasswordInputType, ToggleIcon] = usePasswordToggler();

    const [check, setCheck] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setSessionId } = useSession();

    const navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/login', {
            email, 
            password
        })
        .then((response) => {
            setCheck(false);

            const userType = response.data.userType;
            const sessionId = response.data.sessionId;
            
            setSessionId(sessionId);
            
            if(userType === 'etudiant'){
                navigate('/submission')
            }else if(userType === 'encadrant'){
                navigate('/students-page')
            }if(userType === 'admin'){
                navigate('/admin-page')
            }

        }).catch((error) => {
            console.log("error fetching user informations ", error);
            setCheck(true);
        });        
    }

    let handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    let handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

  return (
    <div className='login w-full min-h-full '>
        <Navbar />
        <form onSubmit={handleSubmit} className='flex justify-center flex-col items-center mt-32 '>
                <div className="form-title text-4xl font-montserrat font-bold mb-16">
                    Welcome
                </div>

                <div className="form-image mb-10 " >
                    <img src={login} className='w-56 h-32' alt="" />
                </div>
                {
                    check && (
                        <div className='mb-1'>
                            <p className=' mr-32 text-[#933939] font-montserrat text-sm'> The Credentials might be Incorrect</p>
                        </div>
                    )
                }
                <div className="username-div ">
                    <input type="email" value={email} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold border-gray-300 h-14 w-96 focus:border-[#222c39] duration-1000' placeholder='Email' name='email' onChange={handleEmailChange}   />
                </div>
                <div className="password-div mb-10 ml-5">
                    <input type={PasswordInputType} value={password} className='outline-none pl-2 border-b-2 text-lg font-montserrat font-semibold mt-8 border-gray-300 h-14 w-96 focus:border-[#222c39] transition duration-1000' placeholder='Password' name='password' onChange={handlePasswordChange}   />
                    <span className='password-toggle-icon '>{ToggleIcon}  </span>
                </div>
                <div className="btn-submit mb-10">
                    <Button type="submit" text="LOGIN" height='48px' textSize ='16px' width='390px' borderRadius="50px" borderShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"  />
                </div>
        </form> 
        <div className="forgot flex justify-center mb-2">
            <p className='mr-32 font-montserrat text-[#8d8a8a]'><span className='font-bold text-2xl '>.</span > Forgot <span className='text-[#597191] hover:text-[#222c39] duration-700'> <Link to="/reset">Username / Password?</Link></span></p>
        </div>
        <Footer />
    </div>
  )
}

export default Login