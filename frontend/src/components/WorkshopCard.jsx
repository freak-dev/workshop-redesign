import React from 'react';

const WorkshopCard = ({ workshop, index }) => {
  const isFull = workshop.status === 'Full';
  const badgeClass = isFull ? 'badge-danger' : 'badge-success';
  const animationDelay = `stagger-${(index % 4) + 1}`;

  return (
    <div className={`workshop-card animate-fade-in ${animationDelay}`}>
      <div className="card-header">
        <span className="card-role">{workshop.role}</span>
        <span className={`badge ${badgeClass}`}>{workshop.status}</span>
      </div>
      
      <h3 className="card-title">{workshop.title}</h3>
      
      <div className="card-date">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        {workshop.date}
      </div>
      
      <div className="card-footer">
        <span className="text-muted" style={{fontSize: '0.875rem'}}>{workshop.type}</span>
        <a href="#" className="action-link">
          Details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WorkshopCard;
