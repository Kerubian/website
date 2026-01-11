import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { seoMeta } from '../content/siteContent';

export const OurMissionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{seoMeta.mission.title}</title>
        <meta name="description" content={seoMeta.mission.description} />
        <meta property="og:title" content={seoMeta.mission.title} />
        <meta property="og:description" content={seoMeta.mission.description} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={seoMeta.mission.title} />
        <meta property="twitter:description" content={seoMeta.mission.description} />
      </Helmet>
      <Section>
        <h1 className="font-heading text-xl tracking-[0.2em] uppercase text-primary">Our Mission</h1>
        <p className="mt-4 text-sm sm:text-base text-secondary/80 max-w-2xl">
          Were refining a detailed articulation of Kerubians mission, principles, and long-term vision.
          Please check back soon for a fuller statement to align with partners and founders.
        </p>
      </Section>
    </>
  );
};
