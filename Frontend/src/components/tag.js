import React from 'react';
import '../Assets/tags/tag.css'; 

const Tag = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="location-tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;
