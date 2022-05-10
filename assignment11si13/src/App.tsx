import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import PatientRegister from './pages/PatientRegister';
import Profile from './pages/Profile';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './pages/Unauthorized';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patientRegister" element={<PatientRegister />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<RequireAuth allowedRole={["Patient"]} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
