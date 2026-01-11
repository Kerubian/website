import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';

const HomePage = React.lazy(() =>
  import('../pages/HomePage').then((m) => ({ default: m.HomePage })),
);
const AboutUsPage = React.lazy(() =>
  import('../pages/AboutUsPage').then((m) => ({ default: m.AboutUsPage })),
);
const IndustryFocusPage = React.lazy(() =>
  import('../pages/IndustryFocusPage').then((m) => ({ default: m.IndustryFocusPage })),
);
const InnovationRDPage = React.lazy(() =>
  import('../pages/InnovationRDPage').then((m) => ({ default: m.InnovationRDPage })),
);
const OurMissionPage = React.lazy(() =>
  import('../pages/OurMissionPage').then((m) => ({ default: m.OurMissionPage })),
);
const ContactPage = React.lazy(() =>
  import('../pages/ContactPage').then((m) => ({ default: m.ContactPage })),
);

export default function App() {
  return (
    <Layout>
      <React.Suspense fallback={<div className="mx-auto max-w-container px-4 py-10 text-sm">Loading…</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/industry-focus" element={<IndustryFocusPage />} />
          <Route path="/innovation-rd" element={<InnovationRDPage />} />
          <Route path="/our-mission" element={<OurMissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </React.Suspense>
    </Layout>
  );
}
