import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  locale?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ locale = 'ar', className = '' }) => (
  <Link
    href={`/${locale}`}
    className={`brand-logo ${className}`.trim()}
    aria-label="SHOMAN home"
  >
    <svg className="monogram" viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path className="gear-ring-navy" d="M27 2.2a19.8 19.8 0 0 0 0 39.6" stroke="#0A2234" strokeWidth="2.6" />
      <path d="M27 2.2a19.8 19.8 0 0 1 0 39.6" stroke="#0284A8" strokeWidth="2.6" />
      <g className="gear-symbol" transform="translate(27 22) scale(0.84) translate(-27 -22)">
        <path className="gear-body" d="M27 8 L29.73 8.27 L33.2 7.03 L36 8.53 L36.9 12.1 L38.64 14.22 L41.97 15.8 L42.89 18.84 L41 22 L40.73 24.73 L41.97 28.2 L40.47 31 L36.9 31.9 L34.78 33.64 L33.2 36.97 L30.16 37.89 L27 36 L24.27 35.73 L20.8 36.97 L18 35.47 L17.1 31.9 L15.36 29.78 L12.03 28.2 L11.11 25.16 L13 22 L13.27 19.27 L12.03 15.8 L13.53 13 L17.1 12.1 L19.22 10.36 L20.8 7.03 L23.84 6.11 Z" fill="#0A2234" />
        <circle cx="27" cy="22" r="7.6" stroke="#0284A8" strokeWidth="2.6" />
        <circle className="gear-center-dot" cx="27" cy="22" r="3.1" fill="#fff" />
      </g>
    </svg>
    <div className="brand-wordmark">
      <span className="title">SHOMAN</span>
      <span className="subtitle">THEATER &amp; SEATING</span>
    </div>
  </Link>
);
