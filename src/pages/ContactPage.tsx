import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { contactInfo, footerContent, seoMeta } from '../content/siteContent';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(5, 'Enter a valid phone number'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
  // Honeypot field: should stay empty
  company: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmitTime, setLastSubmitTime] = React.useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (values: ContactFormValues) => {
    // Simple client-side rate limiting: disallow submissions within 10 seconds
    const now = Date.now();
    if (lastSubmitTime && now - lastSubmitTime < 10_000) {
      setStatus('error');
      return;
    }

    // Honeypot check
    if (values.company && values.company.trim().length > 0) {
      setStatus('error');
      return;
    }

    setLastSubmitTime(now);

    // In a real implementation this would POST to a backend or form service.
    // For now we simulate success.
    setStatus('success');
    reset({ name: '', email: '', phone: '', message: '', company: '' });
  };

  return (
    <>
      <Helmet>
        <title>{seoMeta.contact.title}</title>
        <meta name="description" content={seoMeta.contact.description} />
        <meta property="og:title" content={seoMeta.contact.title} />
        <meta property="og:description" content={seoMeta.contact.description} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={seoMeta.contact.title} />
        <meta property="twitter:description" content={seoMeta.contact.description} />
      </Helmet>
      <Section
        fullWidth
        style={{ minHeight: 'calc(100vh - 80px)' }}
        className="relative flex items-center justify-center bg-gradient-to-br from-background to-secondary/10"
      >
        <div className="relative mx-auto max-w-5xl px-4 w-full">
          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl tracking-[0.25em] uppercase text-primary text-center md:text-left">
            Connect With Us
          </h1>
          <Card className="mt-8 border-white/60 bg-white/30 backdrop-blur-lg shadow-xl">
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div className="space-y-2 text-sm sm:text-base text-secondary/90">
                <p>
                  <span className="font-semibold">Email:</span> info[at]kerubian[dot]com
                </p>
                <p>
                  <span className="font-semibold">Contact:</span> {contactInfo.phone}
                </p>
                <p>
                  <span className="font-semibold">Address:</span> {contactInfo.address}
                </p>
              </div>
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                aria-describedby="contact-form-status"
              >
                <div>
                  <label className="block text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-1 block w-full rounded-base border border-secondary/20 bg-white px-3 py-2 text-sm text-secondary shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-primary" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full rounded-base border border-secondary/20 bg-white px-3 py-2 text-sm text-secondary shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-primary" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="mt-1 block w-full rounded-base border border-secondary/20 bg-white px-3 py-2 text-sm text-secondary shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-primary" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-base border border-secondary/20 bg-white px-3 py-2 text-sm text-secondary shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-primary" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register('company')} />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Submit'}
                  </Button>
                  {status === 'success' && (
                    <p id="contact-form-status" className="text-xs text-green-700">
                      Thank you. Your message has been noted.
                    </p>
                  )}
                  {status === 'error' && (
                    <p id="contact-form-status" className="text-xs text-primary">
                      Please wait a moment before submitting again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Card>
          <p className="mt-6 text-xs text-secondary/70 text-center md:text-left">
            {footerContent.copyright}
          </p>
        </div>
      </Section>
    </>
  );
};
