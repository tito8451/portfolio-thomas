// src/app/layout.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './globals.css'; // Assurez-vous d'importer vos styles globaux

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    setCurrentDate(new Date().getFullYear().toLocaleString()); // Définit la date après le montage
  }, []);
  return (
    <html lang="fr">
      <body className="bg-background text-foreground">
        <header className="bg-gray-800 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Portfolio Thomas CORNU</h1>
          <nav className="mt-2">
           <a href="/about" className="px-2">À propos</a>
           <a href="/contact" className="px-2">Contact</a>
           <a href="/projects" className="px-2">Projets</a>
           <Link href="/" className='px-2'>Home</Link>
  </nav>
        </header>
        <main className="p-4">{children}
       
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; {currentDate} Thomas CORNU</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
