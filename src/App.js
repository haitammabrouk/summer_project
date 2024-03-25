import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Submission from './pages/Submission'
import SubmissionDetails from './pages/SubmissionDetails';
import ProfilSettings from './pages/ProfilSettings'
import Home from'./pages/Home';
import Login from './pages/Login';
import ResetLogin from './pages/ResetLogin';
import EmailVerification from './pages/EmailVerification'
import NewPassword from './pages/NewPassword'
import CV from './pages/CV'
import CVUpload from './pages/CVUpload'
import HomeAdmin from './pages/HomeAdmin';
import Structure from './pages/Structure';
import Manage from './pages/Manage';
import StructureConsultation from './pages/StructureConsultation';
import ArchiveUtilisateur from './pages/ArchiveUtilisateur';
import ArchiveUtilisateurFiles from './pages/ArchiveUtilisateurFiles';
import ArchiveEtudiant from './pages/ArchiveEtudiant';
import ArchiveEtudiantFiles from './pages/ArchiveEtudiantFiles';
import ArchiveAdmin from './pages/ArchiveAdmin';
import ArchiveAdminFiles from './pages/ArchiveAdminFiles';
import UpdateSubmission from './pages/UpdateSubmission';
import ProfilSettingsEncadrant from './pages/ProfilSettingsEncadrant';
import StudentsPage from './pages/StudentsPage'
import EtudiantRapport from './pages/EtudiantRapport';
import DepotRapports from './pages/DepotRapports';
import StructureConsultationUtilisateur from './pages/StructureConsultationUtilisateur';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/submission' element={<Submission/>} />
          <Route path='/details' element={<SubmissionDetails/>} />
          <Route path='/profil' element={<ProfilSettings/>} />
          <Route path='/profil-encadrant' element={<ProfilSettingsEncadrant/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/reset' element={<ResetLogin/>} />
          <Route path='/verification' element={<EmailVerification/>} />
          <Route path='/reseting' element={<NewPassword/>} />
          <Route path='/cv' element={<CV/>} />
          <Route path='/cv-upload' element={<CVUpload/>} />
          <Route path='/admin-page' element={<HomeAdmin/>} />
          <Route path='/structure' element={<Structure/>} />
          <Route path='/manage' element={<Manage/>} />
          <Route path='/students-page' element={<StudentsPage/>} />
          <Route path='/structure-consultation' element={<StructureConsultation/>} />
          <Route path='/structure-consultation-utilisateur' element={<StructureConsultationUtilisateur/>} />
          <Route path='/archive-utilisateur' element={<ArchiveUtilisateur/>} />
          <Route path='/archive-utilisateur-files' element={<ArchiveUtilisateurFiles/>} />
          <Route path='/archive-etudiant' element={<ArchiveEtudiant/>} />
          <Route path='/archive-etudiant-files' element={<ArchiveEtudiantFiles/>} />
          <Route path='/archive-admin' element={<ArchiveAdmin/>} />
          <Route path='/archive-admin-files' element={<ArchiveAdminFiles/>} />
          <Route path='/update-submission' element={<UpdateSubmission/>} />
          <Route path='/etudiant-rapport' element={<EtudiantRapport/>} />
          <Route path='/depot' element={<DepotRapports/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
