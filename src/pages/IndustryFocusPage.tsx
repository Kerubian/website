import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { seoMeta } from '../content/siteContent';

export const IndustryFocusPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{seoMeta.industryFocus.title}</title>
        <meta name="description" content={seoMeta.industryFocus.description} />
        <meta property="og:title" content={seoMeta.industryFocus.title} />
        <meta property="og:description" content={seoMeta.industryFocus.description} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={seoMeta.industryFocus.title} />
        <meta property="twitter:description" content={seoMeta.industryFocus.description} />
      </Helmet>
      <Section>
        <h1 className="font-heading text-xl tracking-[0.2em] uppercase text-primary">Industry Focus</h1>
        <p className="mt-4 text-sm sm:text-base text-secondary/80 max-w-2xl">
          Were preparing detailed perspectives on the industries and value chains where Kerubian is most
          active. Please check back soon for sector insights and use cases.
        </p>
      </Section>
    </>
  );
};
