"use client";

import React, { useState } from 'react';
import { db } from '../../firebase'; // Assurez-vous que le chemin est correct
import { collection, addDoc } from 'firebase/firestore';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      alert('Message envoyé avec succès!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      alert('Erreur lors de l\'envoi du message!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Contactez-moi</h2>
      <input 
        type="text" 
        placeholder="Votre nom" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
        className="w-full mb-2 p-2 border" />
      <input 
        type="email" 
        placeholder="Votre email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
        className="w-full mb-2 p-2 border" />
      <textarea 
        placeholder="Votre message" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        required 
        className="w-full mb-2 p-2 border" />
      <button type="submit" className="w-full bg-blue-600 text-white p-2">Envoyer</button>
    </form>
  );
};

export default ContactPage;
