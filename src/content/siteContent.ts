export type NavItem = {
    label: string;
    path: string;
};

export type ServiceBlock = {
    title: string;
    bullets: string[];
};

export type ServiceCategory = {
    label: string;
    icon: string;
};

export type FounderInfo = {
    heading: string;
    name: string;
    title: string;
    statement: string;
};

export type ContactInfo = {
    email: string;
    phone: string;
    address: string;
};

export type SocialLinks = {
    linkedin: string;
    email: string;
    whatsapp: string;
};

export const navItems: NavItem[] = [
    { label: 'About Us', path: '/about-us' },
    { label: 'Industry Focus', path: '/industry-focus' },
    { label: 'Innovation & R&D', path: '/innovation-rd' },
    { label: 'Our Mission', path: '/our-mission' },
    { label: 'Contact Us', path: '/contact' },
];

export const homeContent = {
    heroTitle: 'FROM STARTUP TO SCALE-UP',
    heroSubtitle: 'Transforming Resources Into Global Opportunities Through Domestic Production Excellence',
    servicesIntro: 'Turning Ideas Into Opportunities',
    serviceCategoryHeadings: [
        {
            label: 'Founders’ Operations & Growth Consulting',
            icon: 'Anchor',
        },
        {
            label: 'Global Trade Operations & Representation',
            icon: 'Language',
        },
        {
            label: 'Project Planning & Venture Development',
            icon: 'Grass',
        },
    ] as ServiceCategory[],
    serviceBlocks: [
        {
            title: "Streamlining Business Operations",
            bullets: [
                "Advisory and operational support for early-stage and growing businesses",
                "Business structuring, strategy, and financial readiness",
                "Registrations, documentation, and statutory compliance",
                "Built for clarity, scalability, and long-term stability",
            ],
        },
        {
            title: "Expanding Business Across Borders",
            bullets: [
                "End-to-end international trade execution",
                "Global supplier and buyer sourcing",
                "Quality, pricing, and regulatory compliance",
                "Logistics, customs, and risk-managed operations",
            ],
        },
        {
            title: "Identifying and Developing Opportunities",
            bullets: [
                "Identification and evaluation of viable opportunities",
                "Market research and on-ground feasibility analysis",
                "Business, project, and partnership structuring",
                "Execution-focused, scalable growth outcomes",
            ],
        }
    ] as ServiceBlock[],
    founder: {
        heading: 'Led by Truth & Integrity',
        name: 'Suleman Khan',
        title: 'Founder/Executive Director',
        statement:
            'My vision is to empower small businesses and underserved individuals by making global trade accessible, practical, and inclusive. I aim to connect SMEs worldwide, drive innovation through product development, and unlock untapped talent by providing skills, opportunities, and real market access—creating sustainable growth, shared success, and long-term economic impact across communities and borders.',
    } as FounderInfo,
    ctaTitle: 'Want to start a new project with us? Let’s Start!',
    ctaButtonLabel: 'Contact Us',
};

export const contactInfo: ContactInfo = {
    email: 'info@kerubian.com',
    phone: '+91 9648 287129',
    address: 'Deva Road, Chinhat, Lucknow 226028 IN',
};

export const footerContent = {
    connectHeading: 'Connect With Us',
    socialHeading: 'Follow & Reach Out',
    copyright: 'Kerubian Trade Private Limited All rights reserved.',
};

export const socialLinks: SocialLinks = {
    // TODO: Replace linkedin with your actual company profile URL
    linkedin: 'https://www.linkedin.com/company/kerubian-trade/',
    email: 'mailto:info@kerubian.com',
    whatsapp: 'https://wa.me/919648287129',
};

export const seoMeta = {
    home: {
        title: 'Kerubian – From Startup to Scale-Up',
        description:
            'Kerubian transforms resources into global opportunities through founders’ operations consulting, global trade representation, and venture development.',
    },
    about: {
        title: 'About Us – Kerubian',
        description: 'Learn more about Kerubian and our mission to empower SMEs through trade and venture development.',
    },
    industryFocus: {
        title: 'Industry Focus – Kerubian',
        description: 'Discover the industries Kerubian supports with advisory, trade operations, and project development.',
    },
    innovation: {
        title: 'Innovation & R&D – Kerubian',
        description: 'Explore how Kerubian supports innovation and R&D for sustainable, scalable growth.',
    },
    mission: {
        title: 'Our Mission – Kerubian',
        description: 'Kerubian’s mission is to create sustainable growth and shared success across communities and borders.',
    },
    contact: {
        title: 'Contact Us – Kerubian',
        description: 'Connect with Kerubian for founders’ advisory, trade operations, and venture development support.',
    },
};
