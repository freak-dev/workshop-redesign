import React from 'react';
import WorkshopCard from './WorkshopCard';

const Dashboard = ({ workshops }) => {
  return (
    <div className="container">
      <div className="page-header animate-fade-in">
        <h2 className="page-title">Current Workshops</h2>
        <p className="page-subtitle">Manage and track your registered workshops</p>
      </div>
      
      <div className="workshop-grid">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
