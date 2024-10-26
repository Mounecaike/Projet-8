import React, { useState } from 'react';
import '../Assets/collapse/collapse.css';

const Collapse = ({ title, content, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className={`collapse-container ${customClass || ''}`}>
      <div className="collapse-bar" onClick={toggleCollapse}>
        <h2 className="collapse-title">{title}</h2>
        <img
          src={require('../Assets/collapse/arrow-up.png')}
          alt="Flèche pour ouvrir/fermer"
          className={`collapse-arrow ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
