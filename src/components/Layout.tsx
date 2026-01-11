import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-secondary font-body">
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
