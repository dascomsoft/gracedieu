import React from 'react'
import Onboarding from "./pages/Onboarding";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AnglophoneSection from './pages/AnglophoneSection';
import FrancophoneSection from './pages/FrancophoneSection';
import BulletinForm from './pages/BulletinForm';
import BulletinPreview from './pages/BulletinPreview';


function App() {

  return (
    
   <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/anglophone" element={<AnglophoneSection />} />
        <Route path="/francophone" element={<FrancophoneSection />} />
   {/* Routes pour les bulletins */}
        <Route path="/bulletin-anglophone" element={<BulletinForm />} />
        <Route path="/bulletin-francophone" element={<BulletinForm />} />
    <Route path="/preview" element={<BulletinPreview />} />
      </Routes>
    </Router>
  )
}

export default App
