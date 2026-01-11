import React from 'react';
import { contactInfo, footerContent, socialLinks } from '../content/siteContent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primary/10 bg-secondary text-background/90">
      <div className="mx-auto max-w-container px-4 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <h2 className="font-heading text-base sm:text-lg tracking-[0.2em] uppercase text-background">
              {footerContent.connectHeading}
            </h2>
            <p className="text-sm sm:text-base text-background/80 leading-relaxed">
              We work with founders, operators, and partners who are building sustainable, long-term value.
            </p>
            <div className="space-y-1.5 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href={socialLinks.email}
                  className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <span className="font-semibold">Contact:</span> {contactInfo.phone}
              </p>
              <p>
                <span className="font-semibold">Address:</span> {contactInfo.address}
              </p>
            </div>
          </div>

          <div className="space-y-3 md:text-right">
            <h3 className="font-heading text-sm sm:text-base tracking-[0.2em] uppercase text-background">
              {footerContent.socialHeading}
            </h3>
            <div className="flex items-center gap-3 md:justify-end">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Kerubian on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/40 bg-background/5 text-background hover:bg-background/15 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary transition-colors"
              >
                <LinkedInIcon fontSize="small" />
              </a>
              <a
                href={socialLinks.email}
                aria-label="Email Kerubian"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/40 bg-background/5 text-background hover:bg-background/15 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary transition-colors"
              >
                <EmailIcon fontSize="small" />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Kerubian"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/40 bg-background/5 text-background hover:bg-background/15 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary transition-colors"
              >
                <WhatsAppIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-background/15 pt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs sm:text-sm text-background/70">
            © {new Date().getFullYear()} {footerContent.copyright}
          </p>
          <p className="text-xs sm:text-sm text-background/60">
            Built with care for founders, operators, and partners.
          </p>
        </div>
      </div>
    </footer>
  );
};
