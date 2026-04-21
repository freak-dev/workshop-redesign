import React, { useState } from 'react';

const ProposeWorkshop = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    type: 'Academic Institution'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required 
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Proposed Date</label>
              <input 
                type="date" 
                className="form-control" 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Workshop Type</label>
              <select 
                className="form-control" 
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                required
              >
                <option value="Academic Institution">Academic Institution</option>
                <option value="Industry Training">Industry Training</option>
                <option value="FOSS Awareness">FOSS Awareness</option>
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
