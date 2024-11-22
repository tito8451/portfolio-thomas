import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  api: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link, api }) => (
  <div className="border rounded-lg p-4 m-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-2">{description}</p>
    <p className="mt-2 text-gray-600"><strong>Technologies:</strong> {technologies.join(', ')}</p>
    {api.length > 0 && (
      <p className="mt-2 text-gray-600"><strong>API:</strong> <a href={api[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{api[0]}</a></p>
    )}
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
      Voir le projet
    </a>
  </div>
);

export default ProjectCard;
