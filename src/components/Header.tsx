import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../content/siteContent';
import clsx from 'clsx';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();
    const menuButtonRef = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
        // Close mobile menu on route change
        setIsMenuOpen(false);
    }, [location.pathname]);

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        if (isMenuOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-primary/10">
            <div className="mx-auto max-w-container px-4 py-3.5 md:py-4.5 flex items-center justify-between">
                <NavLink
                    to="/"
                    className="flex items-center gap-2 rounded-base px-1.5 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    <img
                        src="/static/images/brand/kerubian_logo.png"
                        alt="Kerubian logo"
                        className="block h-9 sm:h-10 md:h-11 w-auto m-0"
                    />
                </NavLink>
                <nav className="hidden md:flex gap-6" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }: { isActive: boolean }) =>
                                clsx(
                                    'text-base font-heading font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                                    isActive
                                        ? 'text-primary border-b-2 border-primary pb-1'
                                        : 'text-secondary/80 hover:text-secondary',
                                )
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                <button
                    ref={menuButtonRef}
                    type="button"
                    className="md:hidden inline-flex items-center justify-center rounded-base border border-secondary/20 px-3 py-2.5 text-base font-semibold text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsMenuOpen((open: boolean) => !open)}
                >
                    <span className="sr-only">Menu</span>
                    <span aria-hidden="true">☰</span>
                </button>
            </div>
            {isMenuOpen && (
                <nav
                    id="primary-navigation"
                    className="md:hidden border-t border-primary/10 bg-background/98"
                    aria-label="Mobile navigation"
                >
                    <div className="mx-auto max-w-container px-4 py-3 flex flex-col gap-3">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }: { isActive: boolean }) =>
                                    clsx(
                                        'text-base font-heading py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                                        isActive ? 'text-primary font-semibold' : 'text-secondary/80 hover:text-secondary',
                                    )
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};
