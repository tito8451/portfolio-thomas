// src/app/projects/page.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';


// Exemple de projets
const projects = [
  {
    title: 'First project',
    description: 'Application de films permettant de consulter des films, de lire des critiques et de gérer des films favoris. Utilise l\'API REST TMDB pour la récupération des données de films.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'CORS', 'Ant Design', 'MongoDB', 'NodeJS', 'ExpressJS'], 
    api: ['https://mymoviz-backend-orcin.vercel.app'],
    link: 'https://mymoviz-frontend-orcin-seven.vercel.app' 
  },
  {
    title: 'Mon deuxième projet',
    description: 'Création d\'un site de e-commerce avec différents écrans et choix de différents produits allant jusqu\'au panier et le paiment avec stripe .',
    technologies: ['React-app', 'Firebase', 'Redux-saga-thunk-toolkit', 'Netlify', 'Styled-components JSX'],
    api: ['https://website-firebase.netlify.app'],
    link: ' https://website-firebase.netlify.app'
  },
  {
    title: 'Mon troisième projet',
    description: 'Une réplique simplifiée de l\'application X @Tweeter, permettant aux utilisateurs de publier des tweets, de liker et de commenter des tweets.',
    technologies: ['React-NextJS', 'Redux-toolkit', 'TypeScript', 'Vercel', 'CSS', 'Ant Design', 'MongoDB', 'NodeJS', 'ExpressJS'],
    api: ['https://back-hackatweet.vercel.app/'],
    link: 'https://frontend-hackatweet.vercel.app/fr/login'
  },
  {
    title: 'Mon quatrième projet',
    description: 'Memories application mobile qui répértorie les voyages et leurs budgets',
    technologies: ['React-Native', 'Redux-toolkit', 'TypeScript', 'Vercel', 'twrnc','MongoDB', 'NodeJS', 'ExpressJS'],
    api: ['https://memories-back-thom.vercel.app/'],
    link: 'yarn install, expo go télécharger, yarn start, scanner le qr code'
  },
  {
  title: 'Mon quatrième projet',
  description: 'Mon Portfolio',
  technologies: ['NextJS', 'Tailwind', 'TypeScript', 'Vercel','MongoDB', 'NodeJS', 'ExpressJS'],
  api: [''],
  link: ''
},
  // Ajoutez d'autres projets ici
];

const ProjectsPage: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Mes Projets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export default ProjectsPage;
// fetch("https://memories-back-thom-tito8451s-projects.vercel.app",{