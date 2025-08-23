'use client';

import React from 'react';
import { Icons } from '@/components/icons';
import ShinyButton from '@/components/ui/shiny-button';
import { cn } from '@/lib/utils';

interface CVDownloadButtonProps {
  className?: string;
  variant?: 'navbar' | 'section';
}

export const CVDownloadButton = ({ className, variant = 'section' }: CVDownloadButtonProps) => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Tondji_Niat_J_Lee_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (variant === 'navbar') {
    return (
      <button
        onClick={handleDownload}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
          className
        )}
        title="Télécharger le CV"
      >
        <Icons.download className="size-4" />
      </button>
    );
  }

  return (
    <ShinyButton
      onClick={handleDownload}
      className={cn(
        'group relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 hover:from-primary/20 hover:via-primary/10 hover:to-primary/20 border border-primary/20 hover:border-primary/30',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Icons.download className="size-4 transition-transform group-hover:translate-y-0.5" />
        <span>Télécharger mon CV</span>
      </div>
    </ShinyButton>
  );
};
