'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';
import { useLang } from '@/contexts/lang';

/* Generates the PDF on demand from src/data/resume.tsx.
   react-pdf is loaded lazily so it never lands in the main bundle. */
export default function CvButton({ className = 'btn btn-secondary', label }: { className?: string; label?: string }) {
  const { t } = useLang();
  const [loading, setLoading] = useState(false);

  const download = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const [{ pdf }, { CVDocument }, { DATA }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('@/lib/cv-generator'),
        import('@/data/resume'),
      ]);
      const blob = await pdf(
        <CVDocument
          data={{
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
          }}
        />,
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${DATA.name.replace(/\s+/g, '_')}_CV.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('CV generation failed', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button type='button' onClick={download} disabled={loading} className={className} aria-busy={loading}>
      <Download size={16} strokeWidth={2} aria-hidden />
      {loading ? t.nav.cvLoading : label ?? t.nav.cv}
    </button>
  );
}
