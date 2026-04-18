'use client';

import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { CVDocument } from '@/lib/cv-generator';
import { DATA } from '@/data/resume';

export default function CvDownloadBtn() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const blob = await pdf(
        <CVDocument
          data={{
            name:         DATA.name,
            location:     DATA.location,
            description:  DATA.description,
            summary:      DATA.summary,
            contact:      DATA.contact,
            skills:       DATA.skills,
            languages:    DATA.languages,
            work:         DATA.work,
            education:    DATA.education,
            certificates: DATA.certificates,
            hobbies:      DATA.hobbies,
          }}
        />
      ).toBlob();

      const url  = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href     = url;
      link.download = `${DATA.name.replace(/\s+/g, '_')}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('CV generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="chip"
      style={{ cursor: loading ? 'wait' : 'none', opacity: loading ? 0.6 : 1, border: 0, background: 'transparent' }}
    >
      {loading ? '...' : '↓ CV'}
    </button>
  );
}
