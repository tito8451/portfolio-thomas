// src/app/page.tsx
const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Bienvenue sur mon portfolio</h1>
      <p>Ceci est un aperçu de mes projets et compétences.</p>
      <a href="/projects" className="text-blue-600 hover:underline">Découvrez mes projets</a>
    </div>
  );
};

export default HomePage;
