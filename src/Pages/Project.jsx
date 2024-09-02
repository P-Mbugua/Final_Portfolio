import React from 'react';

export default function Project({ title, description, image }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
    </div>
  );
}
