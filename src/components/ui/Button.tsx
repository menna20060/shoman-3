import React from 'react';
import Link from 'next/link';
import { Icon } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  arrow?: 'right' | 'left' | 'auto' | 'none';
  locale?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  arrow = 'none',
  locale = 'ar',
  children,
  className = '',
  ...props
}) => {
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  const combinedClass = `btn ${variantClass} ${className}`.trim();

  const isRtl = locale === 'ar';
  let arrowIconName = '';
  if (arrow === 'auto') {
    arrowIconName = isRtl ? 'icon-arrow-left' : 'icon-arrow-right';
  } else if (arrow === 'right') {
    arrowIconName = 'icon-arrow-right';
  } else if (arrow === 'left') {
    arrowIconName = 'icon-arrow-left';
  }

  const content = (
    <>
      <span>{children}</span>
      {arrowIconName && (
        <Icon name={arrowIconName} size="sm" className="btn-arrow" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};
