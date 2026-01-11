import React from 'react';
import { clsx } from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-base px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variant === 'primary' && 'bg-primary text-background hover:bg-primary/90',
        variant === 'secondary' &&
          'bg-secondary text-background hover:bg-secondary/90 border border-secondary/20',
        variant === 'ghost' && 'text-primary hover:bg-primary/10',
        className,
      )}
      {...props}
    />
  );
};
