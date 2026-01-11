import React from 'react';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
};

export const Section: React.FC<SectionProps> = ({ id, children, className, style, fullWidth }) => {
  return (
    <section
      id={id}
      style={style}
      className={
        (fullWidth ? 'w-full px-4 py-12 sm:py-16 md:py-20 ' : 'mx-auto max-w-container px-4 py-12 sm:py-16 md:py-20 ') +
        (className ? className : '')
      }
    >
      {children}
    </section>
  );
};
