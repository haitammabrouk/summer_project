import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGraduationCap, faHandshakeSimple, faX } from '@fortawesome/free-solid-svg-icons';
import { PieChart, Pie, BarChart, XAxis, YAxis, CartesianGrid,Legend, Bar, Tooltip } from 'recharts';
import Login from './Login';
import { useSession } from '../SessionContext';

function HomeAdmin() {

    const [pfeValide, setPfeValide] = useState([]);
    const [pfeNonValide, setPfeNonValide] = useState([]);
    const [nbrOfStructures, setNbrOfStructures] = useState();
    const [nbrOfEtudiants, setNbrOfEtudiants] = useState();
    const [barData, setBarData] = useState();

    const {sessionId} = useSession();

    const checkId = (id) => {
        if(id === null){
            return true
        }else{
            return false;
        }
    }


  
    useEffect(() => {
      try {
        axios.get("http://localhost:8080/pfevalide")
          .then((responsevalide) => {
            setPfeValide(responsevalide.data);
          });
  
        axios.get("http://localhost:8080/pfenonvalide")
          .then((responsenonvalide) => {
            setPfeNonValide(responsenonvalide.data);
          });

          axios.get("http://localhost:8080/number-structures")
          .then((response) => {
            setNbrOfStructures(response.data);
          })

          axios.get("http://localhost:8080/number-etudiants")
          .then((response) => {
            setNbrOfEtudiants(response.data);
          })

          axios.get("http://localhost:8080/moyenotefil")
          .then((response) => {
            setBarData(response.data);
          })


      } catch (error) {
        console.log("Error fetching rapport information:", error);
      }
    }, []);

  return (
    
    checkId(sessionId) ? <Login /> : (
      <div className='home-admin min-h-full w-full'>
        <NavbarAdmin />
        <div className=' pt-[25px] bg-[#f8f8f8] font-montserrat'>
        <div className="py-7">
          <div className='flex justify-around  mt-10 '>
          <div className='card w-72 h-[150px] rounded-[8px] flex justify-around py-4  bg-[#ffff] cursor-pointer shadow-lg transform hover:scale-[105%] transition duration-300 ease-out'>
              <div className='pl-2'>
                  <div className="title ">
                    <p className=' text-[#565555] text-left text-sm'>PFE VALIDE</p>
                  </div>
                  <div className="number text-3xl font-semibold pt-5 text-left">
                    <p>{pfeValide.length} </p>
                  </div>
              </div>
              <div>
                <div className="logo pr-2">
                  <FontAwesomeIcon className='bg-[#3a774c]  text-[#ffff] rounded-full py-2 px-3 ' size='2x' icon={faCheck} />
                </div>
              </div>
            </div>
            <div className='card w-72 h-[150px] rounded-[8px] flex justify-around py-4  bg-[#ffff] cursor-pointer shadow-lg transform hover:scale-[105%] transition duration-300 ease-out'>
              <div className='pl-2'>
                  <div className="title ">
                    <p className=' text-[#565555] text-left text-sm'>PFE NON VALIDE</p>
                  </div>
                  <div className="number text-3xl font-semibold pt-5 text-left">
                    <p>{pfeNonValide.length} </p>
                  </div>
              </div>
              <div>
                <div className="logo pr-2">
                  <FontAwesomeIcon className='bg-[#932f2f]  text-[#ffff] rounded-full px-3 py-2' size='2x' icon={faX} />
                </div>
              </div>
            </div>
            <div className='card w-72 h-[150px] rounded-[8px] flex justify-around py-4  bg-[#ffff] cursor-pointer shadow-lg transform hover:scale-[105%] transition duration-300 ease-out'>
              <div className='pl-8'>
                  <div className="title ">
                    <p className=' text-[#565555] text-left text-sm'>STRUCTURE EN COLLABORATION</p>
                  </div>
                  <div className="number text-3xl font-semibold pt-5 text-left">
                    <p>{nbrOfStructures} </p>
                  </div>
              </div>
              <div>
                <div className="logo pr-2">
                  <FontAwesomeIcon className='bg-[#6aa59e]  text-[#ffff] rounded-full px-2 py-3' size='2x' icon={faHandshakeSimple} />
                </div>
              </div>
            </div>
            <div className='card w-72 h-[150px] rounded-[8px] flex justify-around py-4  bg-[#ffff] cursor-pointer shadow-lg transform hover:scale-[105%] transition duration-300 ease-out'>
              <div className='pl-2'>
                  <div className="title ">
                    <p className=' text-[#565555] text-left text-sm'>ETUDIANTS TOTAL</p>
                  </div>
                  <div className="number text-3xl font-semibold pt-5 text-left">
                    <p>{nbrOfEtudiants} </p>
                  </div>
              </div>
              <div>
                <div className="logo pr-2">
                  <FontAwesomeIcon className='bg-[#8d58f7]  text-[#ffff] rounded-full px-2 py-3' size='2x' icon={faGraduationCap} />
                </div>
              </div>
            </div>
            </div>
            <div className="charts flex justify-between mt-10">
              <div className="bar-chart pt-3  rounded-xl">
              <BarChart
                width={700}
                height={500}
                data={barData}
                margin={{
                  top: 5,
                  right: 80,
                  left: 80,
                  bottom: 160,
                }}
                barSize={30}
              >
                <XAxis
                  dataKey="filliere"
                  interval={0} // Display all labels
                  angle={-35} // Rotate labels by 45 degrees
                  textAnchor="end" // Align rotated labels to the end of the tick
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="note" fill="#8884d8" background={{ fill: "#eee" }} />
              </BarChart>
              </div>
              <div className='pie-chart pt-3  rounded-xl'>
              <PieChart width={700} height={400}>
              <Pie
                dataKey="note"
                data={barData}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#6aa59e"
                label={({ filliere }) => filliere}
              />
              <Tooltip />
            </PieChart>

              </div>
            </div>

          </div>
        </div>
    </div>
    )

  )
}

export default HomeAdmin