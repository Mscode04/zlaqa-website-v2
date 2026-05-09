import React from 'react';
import logoWt from '@/assets/logo/logo-wt.png';
import logoBk from '@/assets/logo/logo-bk.png';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark' }) => {
  const logoSrc = variant === 'light' ? logoWt : logoBk;

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: '3.5/1' }}>
      <Image
        src={logoSrc}
        alt="zlaqa-logo"
        className="object-contain w-full h-full"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};