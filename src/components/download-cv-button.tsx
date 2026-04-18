'use client';

import { pdf } from '@react-pdf/renderer';
import { CVDocument } from '@/lib/cv-generator';
import { DATA } from '@/data/resume';
import { ReactElement, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface DownloadCVButtonProps {
  children: ReactElement;
  className?: string;
}

export const DownloadCVButton = ({
  children,
  className,
}: DownloadCVButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isGenerating) return;
    
    setIsGenerating(true);

    try {
      // Préparer les données du CV
      const cvData = {
        name: DATA.name,
        location: DATA.location,
        description: DATA.description,
        summary: DATA.summary,
        contact: DATA.contact,
        skills: DATA.skills,
        languages: DATA.languages,
        work: DATA.work,
        education: DATA.education,
        certificates: DATA.certificates,
        hobbies: DATA.hobbies,
      };

      // Générer le PDF
      const doc = <CVDocument data={cvData} />;
      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();

      // Télécharger le fichier
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${DATA.name.replace(/\s+/g, '_')}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Une erreur est survenue lors de la génération du CV. Veuillez réessayer.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div 
      onClick={handleDownload} 
      className={className}
      style={{ 
        opacity: isGenerating ? 0.6 : 1,
        cursor: isGenerating ? 'wait' : 'pointer',
        pointerEvents: isGenerating ? 'none' : 'auto',
      }}
    >
      {isGenerating ? (
        <Loader2 className='size-4 animate-spin' />
      ) : (
        children
      )}
    </div>
  );
};

