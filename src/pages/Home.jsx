import React from 'react'
import Navbar from '../components/Navbar'
import lifecycle from '../assets/project-management-life-cycle.jpg'
import question from '../assets/40784.jpg'
import search from '../assets/search.png'
import document from '../assets/document.png'
import correct from '../assets/check_and_cross_flat_boxes.jpg'
import bulb from '../assets/8279.jpg'
import presentation from '../assets/Seminar-amico.png'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='home w-full min-h-full'>
        <Navbar />
        <div id='article' className="article">
            <div className="article-intro font-montserrat mt-16  ">
              <p className='text-4xl font-bold'>Comment réaliser un projet de fin d'études ?</p>
              <p className='text-2xl font-semibold text-[#767676] mt-3'>Les étapes à suivre pour réussir votre projet de fin d'études</p>
              <div className="published mt-5 border-t border-b border-[#dedcdc] border-1 mx-64 py-1">
                <p className='text-sm text-[#567092]'>Published by admin , 12 Juin 2023</p>
              </div>
              <div className="article-intro-image border-b border-[#abaaaa] border-0.4 mx-80 pb-8  flex flex-col mt-8">
                <img src={lifecycle} className=' h-96 w-full' alt="" />
              </div>
            </div>
            <div className="article-content mx-72 text-left mt-10">
                <div className="introduction">
                    <p className=' font-bold text-xl font-montserrat '>INTRODUCTION</p>
                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>
                    Le projet de fin d’étude, également appelé projet de fin d’études ou mémoire de fin d’études, est un travail de recherche approfondi réalisé par un étudiant en fin de cursus d’une formation académique. Le projet de fin d’étude a pour but de mettre en pratique les connaissances et les compétences acquises au cours de la formation, de démontrer la capacité de l’étudiant à mener une recherche indépendante et de contribuer à l’avancement des connaissances dans son domaine.
                    </p>
                    <p className=' font-bold text-xl font-montserrat mt-5'>1 - Choisissez le bon sujet</p>
                    <div className="question-image flex justify-center">
                        <img className='h-96' src={question} alt="" />
                    </div>
                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>Choisissez un sujet qui vous passionne. En effet, la réalisation du projet de diplôme nécessitera beaucoup d’heures et d’efforts ; d’où l’importance de rechercher un thème qui vous motive et qui rend ces heures beaucoup plus agréables.</p>
                    <br />
                    <p className='text-lg font-medium font-montserrat text-[#505050]  '>Vous n’êtes pas sans savoir que si vous faites quelque chose que vous aimez, cela vous coûtera beaucoup moins de stress et de pression , et vous vous sentirez beaucoup plus heureux des résultats.</p>
                    <p className=' font-bold text-xl font-montserrat mt-8'>2 - Qui dirigera votre projet ?</p>

                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>Il est primordial que vous choisissiez avec soin l’encadrant avec qui vous voulez travailler, et qui encadrera votre travail de recherche. Cette personne doit maîtriser parfaitement le sujet, et doit être capable de vous guider et de vous assister dans tout ce dont vous avez besoin au moment de l’élaboration de votre travail.</p>
                    <br />
                    <p className='text-lg font-medium font-montserrat text-[#505050]  '>Il également important que vous entreteniez de bonnes relations avec votre encadrant, pour travailler en bonne harmonie.</p>
                    <p className=' font-bold text-xl font-montserrat mt-8'>3 - Préparez une bonne enquête</p>
                    <div className="question-image flex justify-center mt-8">
                        <img className='h-96' src={search} alt="" />
                    </div>
                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>Lorsque le choix du sujet, de la problématique et de l’encadrant sont établis, il est temps de vous consacrer pleinement à l’étape de la recherche. Votre travail doit faire l’objet d’une recherche riche et approfondie d’informations permettant de tirer des conclusions.C’est pourquoi vous êtes censé consulter différentes sources, réaliser des interviews, et étudier des ouvrages traitant du sujet en question.</p>
                    <p className=' font-bold text-xl font-montserrat mt-8'>4 - Organisez votre documentation</p>
                    <div className="question-image flex justify-center mt-4">
                        <img className='h-96' src={document} alt="" />
                    </div>
                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>Une fois que vous avez rassemblé toutes les informations nécessaires pour pouvoir élaborer votre projet, créez des schémas et sélectionnez les parties et les axes que vous allez traiter. Il est important, à cette phase, que vous définissiez le fil conducteur que vous souhaitez suivre.</p>
                    <p className=' font-bold text-xl font-montserrat mt-8'>5 - Une rédaction irréprochable</p>
                    <div className="question-image flex justify-center">
                        <img className='h-96' src={correct} alt="" />
                    </div>
                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>C’est une condition consubstantielle pour assurer le succès de votre travail de recherche. Assurez-vous que votre contenu soit correct et  compréhensible.</p>
                    <p className=' font-bold text-xl font-montserrat mt-8'>6 - Une bonne conclusion</p>
                    <div className="question-image flex justify-center">
                        <img className='h-96' src={bulb} alt="" />
                    </div>
                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>Tout travail réalisé se clôture par une conclusion , et parfois l’infirmation ou la confirmations des hypothèses que vous avez formulées à la phase de départ. Cette section devrait également servir aussi bien de synthèse que d’ouverture.</p>
                    <p className=' font-bold text-xl font-montserrat mt-8'>7 - La présentation et la mise en forme du contenu</p>

                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>Chaque établissement exige un processus bien défini lors de la réalisation des projets de fin d’études. Votre travail doit être soumis dans le bon format, que vous devez connaître au préalable dans le but d’éviter d’éventuels problèmes.</p>
                    <p className=' font-bold text-xl font-montserrat mt-8'>8 - La demande d’autorisation de soutenance</p>

                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>Une fois que votre encadrant a approuvé votre travail, vous devez préparer différents documents pour les soumettre à votre établissement académique, pour que vous puissiez passer à l’étape de la soutenance. Il s’agit communément de deux copies imprimées de votre projet et du consentement de l’encadrant, ainsi que de vos données personnelles.</p>
                    <p className=' font-bold text-xl font-montserrat mt-8'>9 -  La soutenance du mémoire ou la thèse</p>
                    <div className="question-image flex justify-center mt-8">
                        <img className='h-96' src={presentation} alt="" />
                    </div>
                    <p className='text-lg font-medium font-montserrat text-[#505050]  mt-5'>Assurez-vous également que votre présentation ne soit pas monotone, et  apportez une attention particulière à votre apparence personnelle et professionnelle .</p>
                    <br />
                    <p className='text-lg font-medium font-montserrat text-[#505050]  '>Le but d’un travail de fin d’études est de tester les connaissances acquises au cours du cursus académique, dans laquelle un sujet est étudié et une problématique est développée à travers un processus de recherche. Il est généralement exposé à travers un document physique, qui respecte une méthodologie scientifique bien spécifique.

Somme toute, l’objectif est de mettre en exergue un travail original, intéressant et convaincant qui apporte quelque chose de précieux à votre domaine d’études.</p>
                    
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home