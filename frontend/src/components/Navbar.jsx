import React from 'react';

const Navbar = ({ activeView, setActiveView }) => {
  return (
    <nav className="navbar glass-panel">
      <div className="container navbar-container">
        <div className="nav-brand">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          FOSSEE
        </div>
        <div className="nav-links">
          <button 
            className={`nav-link ${activeView === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveView('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`nav-link ${activeView === 'propose' ? 'active' : ''}`}
            onClick={() => setActiveView('propose')}
          >
            Propose
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
