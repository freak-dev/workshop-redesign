import React from 'react';

const ProposeWorkshop = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="container">
      <div className="page-header animate-fade-in">
        <h2 className="page-title">Propose Workshop</h2>
        <p className="page-subtitle">Submit a proposal for a new FOSSEE workshop</p>
      </div>

      <div className="glass-panel form-card animate-fade-in stagger-1">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Workshop Title</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="e.g. Introduction to Python for Scientific Computing"
              required 
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Proposed Date</label>
              <input 
                type="date" 
                className="form-control" 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Workshop Type</label>
              <select className="form-control" required>
                <option value="">Select a type...</option>
                <option value="academic">Academic Institution</option>
                <option value="industry">Industry Training</option>
                <option value="awareness">FOSS Awareness</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Target Audience</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="e.g. Undergraduate Students"
              required 
            />
          </div>

          <div className="form-group" style={{ marginTop: '2rem' }}>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Submit Proposal
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProposeWorkshop;
