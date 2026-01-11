## 1. Document control

**Product name:** Kerubian Website (Marketing + Contact) ([kerubian.com][1])
**Document type:** Software Specification Document (SSD)
**Frontend stack (required):** React + TypeScript + Vite + Tailwind CSS
**Brand font (required):** Trajan Pro (via CDN provided by user)
**Design tokens (required):**

* Primary: `#6E2C30`
* Secondary: `#010101`
* Default radius: `0.5rem`

---

## 2. Product overview

### 2.1 Purpose

Build a **mobile- and desktop-friendly** marketing website that communicates Kerubian’s value proposition and services (startup-to-scale-up advisory + global trade operations), introduces the founder, and provides clear contact information. ([kerubian.com][1])

### 2.2 Primary objectives

1. Communicate offerings clearly with concise, scannable content blocks. ([kerubian.com][1])
2. Provide easy navigation across pages: About Us, Industry Focus, Innovation & R&D, Our Mission, Contact Us. ([kerubian.com][1])
3. Ensure ADA-aligned typography, color contrast, keyboard navigation, and responsive layout.
4. Be lightweight, fast, SEO-friendly, and easy to maintain.

### 2.3 Target users

* Micro and early-stage founders
* SMEs seeking trade representation and cross-border execution
* Partners/investors looking for venture/project development support ([kerubian.com][1])

---

## 3. Information architecture

### 3.1 Top-level pages (routes)

* `/` Home ([kerubian.com][1])
* `/about-us/` About Us ([kerubian.com][2])
* `/industry-focus/` Industry Focus ([kerubian.com][3])
* `/innovation-rd/` Innovation & R&D ([kerubian.com][4])
* `/our-mission/` Our Mission ([kerubian.com][5])
* `/contact/` Contact Us ([kerubian.com][6])

### 3.2 Navigation requirements

* Sticky header navigation on desktop.
* Collapsible mobile menu (hamburger) with accessible focus management.
* Active route indication (underline/border/weight) that meets contrast requirements. ([kerubian.com][1])

---

## 4. Content inventory (textual content to include)

> Note: The following text is the **live site’s visible textual content** captured from the homepage and the “Connect With Us” section (also present on other pages). ([kerubian.com][1])

### 4.1 Global header nav labels

* About Us ([kerubian.com][1])
* Industry Focus ([kerubian.com][1])
* Innovation & R&D ([kerubian.com][1])
* Our Mission ([kerubian.com][1])
* Contact Us ([kerubian.com][1])

### 4.2 Home page sections and text

**Hero / intro**

* “FROM STARTUP TO SCALE-UP” ([kerubian.com][1])
* “Transforming Resources Into Global Opportunities Through Domestic Production Excellence” ([kerubian.com][1])

**Services overview**

* “Turning Ideas Into Opportunities” ([kerubian.com][1])

**Service categories (headings)**

* “Founders’ Operations & Growth Consulting” ([kerubian.com][1])
* “Global Trade Operations & Representation” ([kerubian.com][1])
* “Project Planning & Venture Development” ([kerubian.com][1])
* “Streamlining Business Operations” ([kerubian.com][1])

**Streamlining Business Operations – bullets**

* “Comprehensive advisory and operational support for micro and early-stage businesses” ([kerubian.com][1])
* “Business structuring and strategic development guidance” ([kerubian.com][1])
* “Financial planning and operational readiness support” ([kerubian.com][1])
* “Statutory registrations, documentation, and compliance management” ([kerubian.com][1])
* “Administrative governance to ensure structure and discipline” ([kerubian.com][1])
* “Focused on clarity, scalability, and long-term business stability” ([kerubian.com][1])

**Expanding Business Across Borders – bullets**

* “Comprehensive international trade management services” ([kerubian.com][1])
* “Development and maintenance of long-term global business relationships” ([kerubian.com][1])
* “Product and market research coordination” ([kerubian.com][1])
* “Quality assurance and competitive pricing alignment” ([kerubian.com][1])
* “Supplier and buyer sourcing and coordination” ([kerubian.com][1])
* “Logistics, freight forwarding, and customs clearance management” ([kerubian.com][1])
* “Export–import documentation and certification handling” ([kerubian.com][1])
* “Regulatory compliance and risk management” ([kerubian.com][1])
* “Strategic trade execution for reliable and scalable operations” ([kerubian.com][1])

**Identifying and Developing Opportunities – bullets**

* “Comprehensive project development and management services” ([kerubian.com][1])
* “Identification and evaluation of viable business opportunities” ([kerubian.com][1])
* “On-ground research and in-depth market analysis” ([kerubian.com][1])
* “Assessment of location, climate, resources, affordability, and local skill availability” ([kerubian.com][1])
* “Development of detailed business and project plans” ([kerubian.com][1])
* “Structuring partnership, investment, and joint venture opportunities” ([kerubian.com][1])
* “End-to-end project execution and coordination” ([kerubian.com][1])
* “Focus on sustainable, scalable, and commercially successful outcomes” ([kerubian.com][1])

**Founder section**

* “Led by Truth & Integrity” ([kerubian.com][1])
* “Suleman Khan” ([kerubian.com][1])
* “Founder/Executive Director” ([kerubian.com][1])
* Founder statement (full paragraph): ([kerubian.com][1])

  * “My vision is to empower small businesses and underserved individuals by making global trade accessible, practical, and inclusive. I aim to connect SMEs worldwide, drive innovation through product development, and unlock untapped talent by providing skills, opportunities, and real market access—creating sustainable growth, shared success, and long-term economic impact across communities and borders.”

**CTA**

* “Want to start a new project with us? Let’s Start!” ([kerubian.com][1])
* “Contact Us” ([kerubian.com][1])

**Footer**

* “Connect With Us” ([kerubian.com][1])
* “Email: info[at]kerubian[dot]com” ([kerubian.com][1])
* “Contact: +91 9648 287129” ([kerubian.com][1])
* “Address: Deva Road, Chinhat, Lucknow 226028 IN” ([kerubian.com][1])
* “© 2025 Kerubian. All rights reserved.” ([kerubian.com][1])

### 4.3 Other pages (current observable text)

The About Us / Industry Focus / Innovation & R&D / Our Mission pages currently display the page title plus the “Connect With Us” block. ([kerubian.com][2])

---

## 5. Functional requirements

### 5.1 Core site behavior

1. **Responsive layout** (mobile-first):

   * Single-column stacking on small screens
   * Multi-column grids on larger screens for service blocks
2. **Navigation**

   * Header nav with routes listed above
   * Mobile menu with keyboard support and aria attributes
3. **CTA behavior**

   * “Contact Us” CTA anchors or routes to `/contact/` ([kerubian.com][1])
4. **Contact section**

   * Display email, phone, and physical address exactly as content inventory shows ([kerubian.com][6])

### 5.2 Contact page functionality

* Must show “Connect With Us” and the contact details block. ([kerubian.com][6])
* Optional enhancement (recommended): contact form

  * Fields: Name, Email, Phone, Message
  * Validation, spam protection (honeypot + rate limiting)
  * Success/error states

### 5.3 SEO + content

* Per-route `<title>` and meta description
* Semantic headings in correct order (H1 once per page, then H2/H3)
* OpenGraph + Twitter card metadata

---

## 6. Non-functional requirements

### 6.1 Accessibility (ADA-aligned)

* **Typography**

  * Base font size: minimum 16px equivalent
  * Use scalable `rem` sizing everywhere
  * Ensure line-height ≥ 1.5 for body text
* **Contrast**

  * Enforce WCAG AA contrast for text and interactive elements (including hover/focus states).
* **Keyboard navigation**

  * Visible focus ring
  * No keyboard traps (mobile menu, modals)
* **ARIA**

  * Nav landmarks, button labels, skip-to-content link
* **Motion**

  * Honor `prefers-reduced-motion`

### 6.2 Performance

* Lighthouse targets (guidelines)

  * Performance ≥ 90 (typical marketing site target)
  * Accessibility ≥ 95
* Use lazy loading for non-critical images
* Minimize JS bundle size (route-based code splitting)

### 6.3 Security

* CSP headers where possible
* Form protections (if enabled): rate limiting, input sanitization
* No secrets in frontend

---

## 7. Visual design system

### 7.1 Brand tokens

* **Primary:** `#6E2C30` (brand accent, buttons, highlights)
* **Secondary:** `#010101` (primary text, headings, dark UI)
* **Radius:** `0.5rem` default (cards, buttons, inputs)

Recommended supporting tokens (implementation details may vary):

* Background: off-white / warm near-white (for contrast with secondary)
* Muted text: near-black at reduced opacity, still passing contrast

### 7.2 Typography

* **Headings:** Trajan Pro via CDN (user-provided)
* **Body font:** system UI font stack (recommended for readability), unless you explicitly want Trajan Pro everywhere.

### 7.3 Layout + components

* Container max width (desktop): 1100–1280px
* Section spacing: consistent vertical rhythm (e.g., 3–6rem)
* Components:

  * Header + Nav
  * Hero block
  * Service category cards (3 groups)
  * Founder profile block
  * CTA banner
  * Footer contact block

---

## 8. Technical requirements

### 8.1 Required technologies

* **React** (SPA)
* **TypeScript**
* **Vite** (build tooling)
* **Tailwind CSS** (styling + responsive)
* **React Router** (routing)

### 8.2 Recommended libraries

* `clsx` + `tailwind-merge` (clean conditional class handling)
* `react-helmet-async` (SEO tags per route)
* `zod` + `react-hook-form` (if contact form is implemented)

### 8.3 Project structure (recommended)

* `src/app` (providers, routing, layout)
* `src/pages` (Home, AboutUs, IndustryFocus, InnovationRD, OurMission, Contact)
* `src/components` (Header, Footer, Section, Card, Button)
* `src/styles` (Tailwind config extensions, tokens)
* `src/content` (site text content as JSON/TS object for easy edits)

---

## 9. Data/content model (static content)

### 9.1 Content as structured config (recommended)

Represent the marketing copy as a typed object so it’s easy to maintain without hunting through JSX:

* `navItems[]`
* `home.hero`
* `home.serviceBlocks[]` (title + bullet list)
* `home.founder` (name, title, statement)
* `contact` (email, phone, address)
* `footer.copyright`

This ensures the site can evolve while keeping content consistent across pages.

---

## 10. Page specifications

### 10.1 Home (`/`)

**Must include (in order, or equivalent hierarchy):**

1. Hero heading: “FROM STARTUP TO SCALE-UP” + supporting line ([kerubian.com][1])
2. “Turning Ideas Into Opportunities” section ([kerubian.com][1])
3. Service blocks:

   * Streamlining Business Operations (bullets)
   * Expanding Business Across Borders (bullets)
   * Identifying and Developing Opportunities (bullets) ([kerubian.com][1])
4. Founder section with name/title and statement ([kerubian.com][1])
5. CTA to Contact ([kerubian.com][1])
6. Footer contact block ([kerubian.com][1])

### 10.2 About Us (`/about-us/`)

* Display page H1: “About Us”
* Include footer contact block ([kerubian.com][2])

### 10.3 Industry Focus (`/industry-focus/`)

* Display page H1: “Industry Focus”
* Include footer contact block ([kerubian.com][3])

### 10.4 Innovation & R&D (`/innovation-rd/`)

* Display page H1: “Innovation & R&D”
* Include footer contact block ([kerubian.com][4])

### 10.5 Our Mission (`/our-mission/`)

* Display page H1: “Our Mission”
* Include footer contact block ([kerubian.com][5])

### 10.6 Contact (`/contact/`)

* Must show “Connect With Us” and all contact details ([kerubian.com][6])
* Optional: contact form (recommended)

---

## 11. Acceptance criteria

### 11.1 Content fidelity

* All headings and bullet points listed in **Section 4** appear on the new site exactly (unless you later choose to rewrite). ([kerubian.com][1])

### 11.2 Responsiveness

* Mobile nav is usable with touch + keyboard.
* No horizontal scrolling at 320px width.
* Content remains readable and spaced appropriately at 200% zoom.

### 11.3 Accessibility

* Keyboard-only navigation passes on all routes.
* Visible focus states.
* Contrast meets WCAG AA for normal text and UI controls.

### 11.4 Performance

* No blocking font loads beyond what’s necessary.
* Images optimized and lazy-loaded where appropriate.

