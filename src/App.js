import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter,Routes,Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ReportPet from './components/ReportPet';
import Login from './components/login';
import Signup from './components/signup';
import Homepage from './components/homepage';
import PetList from './components/PetList';
import EditPet from './components/UpdatePet';
function App() {
  return (
    <div class="container">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/report-pet' element={<ReportPet />} />
          <Route path='/pets-list' element={<PetList/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/update-pet/:id" element={<EditPet />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;