import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { homeContent, seoMeta, socialLinks } from '../content/siteContent';
import AnchorIcon from '@mui/icons-material/Anchor';
import LanguageIcon from '@mui/icons-material/Language';
import GrassIcon from '@mui/icons-material/Grass';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const HomePage: React.FC = () => {
    const [heroVisible, setHeroVisible] = React.useState(false);
    const [servicesVisible, setServicesVisible] = React.useState(false);
    const [serviceBlocksVisible, setServiceBlocksVisible] = React.useState<boolean[]>(() =>
        new Array(homeContent.serviceBlocks.length).fill(false)
    );
    const servicesRef = React.useRef<HTMLDivElement | null>(null);
    const serviceBlockRefs = React.useRef<(HTMLDivElement | null)[]>([]);
    const [founderVisible, setFounderVisible] = React.useState(false);
    const founderRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setHeroVisible(true);
            return;
        }

        const timeout = window.setTimeout(() => setHeroVisible(true), 50);

        let servicesObserver: IntersectionObserver | null = null;
        let blocksObserver: IntersectionObserver | null = null;
        let founderObserver: IntersectionObserver | null = null;

        if (servicesRef.current && 'IntersectionObserver' in window) {
            servicesObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setServicesVisible(true);
                            if (servicesObserver && servicesRef.current) {
                                servicesObserver.unobserve(servicesRef.current);
                            }
                        }
                    });
                },
                { threshold: 0.3 }
            );

            servicesObserver.observe(servicesRef.current);
        }

        if ('IntersectionObserver' in window) {
            blocksObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;

                        const index = serviceBlockRefs.current.findIndex((ref) => ref === entry.target);
                        if (index === -1) return;

                        setServiceBlocksVisible((prev) => {
                            const next = [...prev];
                            next[index] = true;
                            return next;
                        });

                        if (blocksObserver) {
                            blocksObserver.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.3 }
            );

            serviceBlockRefs.current.forEach((ref) => {
                if (ref) {
                    blocksObserver!.observe(ref);
                }
            });
        }

        if (founderRef.current && 'IntersectionObserver' in window) {
            founderObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;

                        setFounderVisible(true);

                        if (founderObserver && founderRef.current) {
                            founderObserver.unobserve(founderRef.current);
                        }
                    });
                },
                { threshold: 0.3 }
            );

            founderObserver.observe(founderRef.current);
        }

        return () => {
            window.clearTimeout(timeout);
            if (servicesObserver && servicesRef.current) {
                servicesObserver.unobserve(servicesRef.current);
            }
            if (blocksObserver) {
                serviceBlockRefs.current.forEach((ref) => {
                    if (ref) {
                        blocksObserver!.unobserve(ref);
                    }
                });
            }
            if (founderObserver && founderRef.current) {
                founderObserver.unobserve(founderRef.current);
            }
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>{seoMeta.home.title}</title>
                <meta name="description" content={seoMeta.home.description} />
                <meta property="og:title" content={seoMeta.home.title} />
                <meta property="og:description" content={seoMeta.home.description} />
                <meta property="og:type" content="website" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:title" content={seoMeta.home.title} />
                <meta property="twitter:description" content={seoMeta.home.description} />
            </Helmet>

            <Section
                id="hero"
                fullWidth
                style={{ minHeight: 'calc(100vh - 80px)' }}
                className="relative flex items-center justify-start overflow-hidden"
            >
                <div className="absolute inset-0" aria-hidden="true">
                    <div className="h-full w-full bg-[url('/static/images/background/bg-bird.webp')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-secondary/70" />
                </div>
                <div className="relative mx-auto max-w-container px-4">
                    <div
                        className={
                            'max-w-3xl text-background transform transition-all duration-700 ease-out ' +
                            (heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')
                        }
                    >
                        <p className="inline-flex items-center rounded-base bg-primary/90 px-4 py-2 font-heading tracking-[0.35em] text-xs sm:text-sm md:text-base uppercase text-background shadow-md">
                            {homeContent.heroTitle}
                        </p>
                        <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold leading-snug">
                            {homeContent.heroSubtitle}
                        </h1>
                    </div>
                </div>
            </Section>

            <Section
                fullWidth
                style={{ minHeight: 'calc(100vh - 80px)' }}
                className="relative flex flex-col items-center justify-center bg-[url('/static/images/background/bg-swirl.jpg')] bg-cover bg-center bg-fixed"
            >
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-heading text-2xl sm:text-3xl tracking-[0.25em] uppercase text-primary">
                        {homeContent.servicesIntro}
                    </h2>
                </div>

                <div
                    ref={servicesRef}
                    className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
                >
                    {homeContent.serviceCategoryHeadings.map((category, index) => {
                        const iconMap: Record<string, React.ReactElement> = {
                            Anchor: <AnchorIcon style={{ fontSize: 56 }} className="text-secondary" />,
                            Language: <LanguageIcon style={{ fontSize: 56 }} className="text-secondary" />,
                            Grass: <GrassIcon style={{ fontSize: 56 }} className="text-secondary" />,
                        };

                        const iconElement = iconMap[category.icon] ?? null;

                        return (
                            <Card
                                key={category.label}
                                className={
                                    'aspect-square border-white/30 bg-white/25 backdrop-blur-md text-secondary/90 text-base sm:text-lg flex flex-col items-center justify-center text-center px-4 py-6 shadow-sm gap-3 transform transition-all duration-700 ease-out ' +
                                    (servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')
                                }
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                {iconElement}
                                <p className="font-heading text-secondary text-base sm:text-lg">
                                    {category.label}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </Section>

            {homeContent.serviceBlocks.map((block, blockIndex) => (
                <Section
                    key={block.title}
                    fullWidth
                    style={{ minHeight: 'calc(100vh - 80px)' }}
                    className="relative flex items-center justify-center bg-[url('/static/images/background/bg-blocks.webp')] bg-cover bg-center bg-fixed"
                >
                    <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
                    <div
                        ref={(el) => {
                            serviceBlockRefs.current[blockIndex] = el;
                        }}
                        className="relative mx-auto max-w-container px-4"
                    >
                        <div className="inline-block rounded-base border border-white/40 bg-white/20 backdrop-blur-md px-5 py-3">
                            <h2 className="font-heading text-lg sm:text-2xl md:text-3xl tracking-[0.18em] uppercase text-primary">
                                {block.title}
                            </h2>
                        </div>
                        <ul className="mt-8 space-y-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-secondary/90 list-disc list-outside pl-6 max-w-2xl">
                            {block.bullets.map((bullet, bulletIndex) => (
                                <li
                                    key={bullet}
                                    className={
                                        'transform transition-all duration-500 ease-out ' +
                                        (serviceBlocksVisible[blockIndex]
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-2')
                                    }
                                    style={{ transitionDelay: `${bulletIndex * 120}ms` }}
                                >
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Section>
            ))}

            <Section
                fullWidth
                style={{ minHeight: 'calc(100vh - 80px)' }}
                className="relative flex items-center justify-center bg-gradient-to-br from-background to-secondary/10"
            >
                <div
                    ref={founderRef}
                    className={
                        'relative mx-auto max-w-5xl px-4 flex flex-col items-center gap-10 transform transition-all duration-700 ease-out ' +
                        (founderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')
                    }
                >
                    <h2 className="font-heading text-xl sm:text-2xl md:text-3xl tracking-[0.25em] uppercase text-primary text-center">
                        {homeContent.founder.heading}
                    </h2>

                    <Card className="w-full border-white/60 bg-white/30 backdrop-blur-lg shadow-xl p-0 overflow-hidden">
                        <div className="grid md:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] items-stretch">
                            <div className="relative h-full">
                                <img
                                    src="/static/images/portraits/Suleman_Kerubian.webp"
                                    alt={homeContent.founder.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="px-6 py-6 sm:px-8 sm:py-8 flex flex-col justify-center gap-4 text-center md:text-left">
                                <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary">
                                    {homeContent.founder.name}
                                </p>
                                <p className="mt-2 text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase font-medium text-secondary">
                                    {homeContent.founder.title}
                                </p>
                                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-secondary/90">
                                    {homeContent.founder.statement}
                                </p>
                                
                            </div>
                        </div>
                    </Card>
                </div>
            </Section>

            <Section
                fullWidth
                style={{ minHeight: 'calc(100vh - 80px)' }}
                className="relative flex items-center justify-center bg-[url('/static/images/background/bg-bird-2.webp')] bg-cover bg-center bg-fixed"
            >
                <Card className="max-w-4xl mx-auto bg-transparent border-none shadow-none p-0 flex flex-col items-center text-center">
                    <div className="w-full px-6 py-8 sm:px-10 sm:py-10 flex flex-col items-center gap-6">
                        <h2 className="font-heading text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-primary">
                            {homeContent.ctaTitle}
                        </h2>
                        <a
                            href={socialLinks.email}
                            className="inline-flex items-center justify-center gap-2 rounded-base bg-primary px-6 py-3 text-sm sm:text-base font-semibold text-background shadow-md transition-colors hover:bg-primary/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            <span>Contact Us</span>
                            <ArrowForwardIcon fontSize="small" />
                        </a>
                    </div>
                </Card>
            </Section>
        </>
    );
};
