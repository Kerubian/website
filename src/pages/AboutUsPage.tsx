import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { seoMeta } from '../content/siteContent';

export const AboutUsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{seoMeta.about.title}</title>
        <meta name="description" content={seoMeta.about.description} />
        <meta property="og:title" content={seoMeta.about.title} />
        <meta property="og:description" content={seoMeta.about.description} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={seoMeta.about.title} />
        <meta property="twitter:description" content={seoMeta.about.description} />
      </Helmet>
      <Section>
        <h1 className="font-heading text-xl tracking-[0.2em] uppercase text-primary">About Us</h1>
        <p className="mt-4 text-sm sm:text-base text-secondary/80 max-w-2xl">
          We're crafting a detailed overview of Kerubian's journey, values, and approach. Please check
          back soon for the full story behind the firm.
        </p>
      </Section>
    </>
  );
};
