import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'default';
  className?: string;
  flipRtl?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'default',
  className = '',
  flipRtl = false,
  ...props
}) => {
  const sizeClass = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    default: '',
  }[size];

  const rtlClass = flipRtl ? 'icon-flip-rtl' : '';
  const iconHref = name.startsWith('#') ? name : `#${name}`;

  return (
    <svg
      className={`icon ${sizeClass} ${rtlClass} ${className}`.trim()}
      aria-hidden="true"
      {...props}
    >
      <use href={iconHref} />
    </svg>
  );
};
