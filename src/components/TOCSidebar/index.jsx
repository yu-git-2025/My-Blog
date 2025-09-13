// components/TOCSidebar.jsx
import React from 'react';
import './index.css';

const TOCSidebar = ({ headings, activeId, onItemClick, title = "文章目录" }) => {
  return (
    <div className="toc-container">
      <h3 className="toc-title">{title}</h3>
      <div className="toc-content">
        {headings.map((heading, index) => (
          <div
            key={index}
            className={`toc-item toc-level-${heading.level} ${activeId === heading.id ? 'active' : ''}`}
            onClick={() => onItemClick(heading.id)}
          >
            {heading.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TOCSidebar;