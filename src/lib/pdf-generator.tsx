'use client';

import React from 'react';
import { pdf } from '@react-pdf/renderer';
import { CVPDFDocument } from '@/components/pdf-template';

export const generateAndDownloadCV = async () => {
  try {
    // Générer le PDF
    const blob = await pdf(React.createElement(CVPDFDocument)).toBlob();
    
    // Créer une URL pour le blob
    const url = URL.createObjectURL(blob);
    
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = url;
    link.download = `${new Date().toISOString().split('T')[0]}_Tondji_Niat_J_Lee_CV.pdf`;
    
    // Ajouter le lien au DOM, cliquer et le supprimer
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Nettoyer l'URL
    URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error);
    return false;
  }
};

export const generateCVBlob = async (): Promise<Blob | null> => {
  try {
    const blob = await pdf(React.createElement(CVPDFDocument)).toBlob();
    return blob;
  } catch (error) {
    console.error('Erreur lors de la génération du blob PDF:', error);
    return null;
  }
};
