import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { seoMeta } from '../content/siteContent';

export const InnovationRDPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{seoMeta.innovation.title}</title>
        <meta name="description" content={seoMeta.innovation.description} />
        <meta property="og:title" content={seoMeta.innovation.title} />
        <meta property="og:description" content={seoMeta.innovation.description} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={seoMeta.innovation.title} />
        <meta property="twitter:description" content={seoMeta.innovation.description} />
      </Helmet>
      <Section>
        <h1 className="font-heading text-xl tracking-[0.2em] uppercase text-primary">Innovation &amp; R&amp;D</h1>
        <p className="mt-4 text-sm sm:text-base text-secondary/80 max-w-2xl">
          Were curating Kerubians innovation, research, and development initiativesfrom pilots to
          long-term platforms. Please check back soon for featured projects and learnings.
        </p>
      </Section>
    </>
  );
};
