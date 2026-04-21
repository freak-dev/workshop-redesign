import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import ProposeWorkshop from './components/ProposeWorkshop'
import './index.css'

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  
  // Mock data for the demonstration
  const [workshops, setWorkshops] = useState([
    { 
      id: 1, 
      title: "Python for Data Science & ML", 
      date: "2026-05-10", 
      role: "Instructor", 
      status: "Open",
      type: "Academic Institution"
    },
    { 
      id: 2, 
      title: "Advanced Scilab Workshop", 
      date: "2026-05-15", 
      role: "Coordinator", 
      status: "Full",
      type: "Industry Training"
    },
    { 
      id: 3, 
      title: "OpenFOAM for Engineering Applications", 
      date: "2026-06-01", 
      role: "Instructor", 
      status: "Open",
      type: "FOSS Awareness"
    },
    { 
      id: 4, 
      title: "eSim Circuit Design Crash Course", 
      date: "2026-06-20", 
      role: "Coordinator", 
      status: "Open",
      type: "Academic Institution"
    },
  ]);

  const handleProposalSubmit = (newWorkshopData) => {
    const newWorkshop = {
      id: workshops.length + 1,
      title: newWorkshopData.title,
      date: newWorkshopData.date,
      role: "Coordinator",
      status: "Pending",
      type: newWorkshopData.type
    };
    
    setWorkshops([newWorkshop, ...workshops]);
    setActiveView('dashboard');
  };

  return (
    <div className="app-layout">
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="main-content">
        {activeView === 'dashboard' ? (
          <Dashboard workshops={workshops} />
        ) : (
          <ProposeWorkshop onSubmit={handleProposalSubmit} />
        )}
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 FOSSEE IIT Bombay - UI/UX Enhancement Redesign</p>
          <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>
            Developed by Shreyansh Chauhan
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
