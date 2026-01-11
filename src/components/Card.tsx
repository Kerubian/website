import React from 'react';
import { clsx } from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'rounded-base border border-secondary/10 bg-white/80 shadow-sm backdrop-blur-sm p-6',
        className,
      )}
    >
      {children}
    </div>
  );
};
