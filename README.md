# CargoMan Website — Product, Content and Design Brief

This document is the source of truth for designing and developing the public CargoMan website. It explains the product, the operational problems it solves, its principal capabilities, the intended market position, and how the website should look and behave.

It is written for a coding agent such as Claude Code. Before implementation, inspect the repository for an existing framework, design system, brand assets, fonts, deployment configuration, and content. Preserve established project conventions where they exist. Do not invent customer names, performance statistics, certifications, testimonials, prices, or integration partners.

---

## 1. Product summary

CargoMan is an operational logistics execution platform for cargo-handling environments. It connects the movement of vehicles, cargo, containers, stock, documents, people, and evidence from gate arrival through receiving, storage, handling, and dispatch.

It is broader than a conventional warehouse management system and should not be presented as merely a barcode application. CargoMan combines:

- Gate and access-control operations
- Pre-advisement and expected-truck planning
- Weighbridge processing
- Warehouse receiving, stock control, packing, and dispatch
- Barcode-, item-, lot-, and order-level traceability
- Container lifecycle management
- Mobile operational capture
- Photographic evidence, signatures, documents, and damage records
- Offline-capable site operations and synchronisation
- Operational reports, dashboards, KPIs, and audit history
- Role-based access and client visibility
- Integration through APIs, database views, and purpose-built endpoints

The core value proposition is simple:

> CargoMan gives logistics sites one controlled operational record from gate to dispatch.

CargoMan is designed for real operating environments where cargo moves through gates, weighbridges, warehouses, yards, depots, and terminals—and where accuracy, speed, accountability, and evidence matter.

### Short description

CargoMan is a logistics execution platform that unifies gate control, weighbridge operations, warehouse workflows, cargo tracking, mobile capture, and operational reporting.

### One-line positioning statement

**Control every cargo movement, from gate to dispatch.**

### Supporting positioning line

One connected platform for weighbridges, warehouses, cargo movements, mobile teams, evidence, and reporting.

---

## 2. Market position

CargoMan should be positioned as a specialised business-to-business operations platform, not a generic ERP, transport marketplace, fleet-tracking product, or basic WMS.

Its strongest position is at the intersection of:

- Warehouse management
- Weighbridge automation
- Gate and yard control
- Cargo and container traceability
- Mobile operational execution
- Evidence and document control
- Site-specific logistics workflows

The website should make this breadth understandable without turning the homepage into a long software feature list. Lead with the operational outcome, show the connected workflow, and then allow visitors to explore individual solutions.

### Primary target organisations

- Dry-bulk and break-bulk terminals
- Cargo terminals and logistics depots
- Warehouses and storage facilities
- Container depots and container-handling operations
- Mining and mineral logistics sites
- Port-adjacent and cross-border logistics operations
- Transport and distribution operators with controlled cargo sites
- Businesses operating weighbridges as part of receiving or dispatch
- Multi-site logistics groups requiring central visibility with local execution

### Key buyer and user personas

| Persona | What they care about |
| --- | --- |
| Managing director / owner | Operational control, risk reduction, scalability, visibility, and return on investment |
| Operations manager | Throughput, bottlenecks, live status, exceptions, and accountability |
| Warehouse manager | Accurate stock, receiving and dispatch control, traceability, and evidence |
| Weighbridge manager / clerk | Fast tickets, reliable readings, duplicate prevention, and simple workflows |
| Security / gate controller | Expected vehicles, driver and vehicle checks, entry/exit status, and auditability |
| Client / cargo owner | Secure visibility of their own orders, stock, movements, and reports |
| Finance / commercial team | Storage calculations, charges, supporting records, and invoice control |
| IT / integration team | Security, APIs, deployment options, resilience, and maintainability |
| Mobile operator / tally clerk | Fast scanning, minimal typing, clear validation, photos, signatures, and offline operation |

### Problems CargoMan solves

- Disconnected spreadsheets, paper tickets, standalone systems, and WhatsApp-based evidence
- Re-entering the same information at the gate, weighbridge, warehouse, and office
- Poor visibility into where cargo is and what state it is in
- Stock discrepancies and weak chain-of-custody records
- Vehicles arriving without reliable pre-advice or operational context
- Duplicate, missing, or inconsistent weighbridge tickets
- Receiving and dispatch errors at barcode or item level
- Insufficient photographic or signature evidence when disputes occur
- Delayed reporting and manual reconciliation
- Sites losing operational capability when internet connectivity is unreliable
- Excessive custom integration work between operational systems
- Users seeing or editing data outside their responsibilities

---

## 3. The CargoMan operating model

CargoMan should be explained as a connected workflow rather than a collection of unrelated screens.

### Typical gate-to-dispatch journey

1. **Plan the movement**  
   Create orders, booking references, order lines, cargo details, expected trucks, and other pre-advice information.

2. **Control arrival**  
   Identify the vehicle, driver, transporter, client, site, and expected movement at the gate. Record arrival, entry, security checks, and supporting information.

3. **Capture weight**  
   Process weighbridge transactions, collect gross/tare/nett values, reduce manual entry, prevent duplicate tickets, and associate the reading with the correct operational record.

4. **Execute the warehouse or yard operation**  
   Receive cargo, scan or assign barcodes, allocate lots and orders, record quantities and weights, capture damages, pack containers, and perform dispatches.

5. **Capture proof**  
   Record photos, signatures, documents, timestamps, users, device information, and exceptions alongside the transaction—not in a separate evidence trail.

6. **Release and dispatch**  
   Validate the movement, confirm items, capture final weights or container status, and record exit.

7. **Monitor and report**  
   View live status, stock movement, balances, throughput, KPIs, client-specific information, audit history, and supporting transaction documents.

Not every CargoMan deployment uses every step. The platform is configurable around the operation.

---

## 4. Product surfaces

CargoMan operates across several connected interfaces.

### Web application

The web application provides browser-based access to operational data, management views, client portals, reporting, administration, and workflows suitable for desktop or tablet use.

### Desktop application

The desktop interface supports operationally intensive and site-connected use cases, including environments where direct hardware or local infrastructure integration is important.

### Mobile application

The mobile application supports warehouse, yard, gate, and field operators. It is designed around scanning and rapid capture rather than office-style data entry. Depending on the workflow, users can:

- Scan barcodes, containers, vehicles, and documents
- Perform cargo receiving and dispatch transactions
- Capture container full-in, packed, full-out, and related lifecycle events
- Record quantities, weights, lots, and client references
- Capture damages and exceptions
- Take mandatory or contextual photographs
- Capture driver, tally-clerk, supervisor, or other signatures
- Work with locally available operational data
- Synchronise completed records and evidence with the central platform

### Integration layer

CargoMan provides controlled data access and integration options, including:

- Authenticated OData-style querying for filtering, sorting, selecting, and retrieving operational records
- Purpose-built REST endpoints for business processes that do not fit a generic data query
- Role-based integration users and token-secured access
- SQL views where database-level reporting or exchange is the best fit
- The ability to post required data to a customer-owned endpoint
- Site- or project-specific integration where needed

The public website should describe these options without publishing security-sensitive implementation details.

---

## 5. Core capabilities

### 5.1 Orders and cargo planning

Orders provide the commercial and operational context for cargo movements. They connect clients, products, quantities, references, sites, origin information, warehouse areas, and related transactions.

Typical capabilities include:

- Orders and order items
- Client and product association
- Booking references
- Expected quantities and cargo attributes
- Origin, destination, warehouse, and site details
- Lot and barcode planning
- Order status and balance visibility
- Links to receiving, dispatch, container, and weighbridge transactions
- Order-specific stock movement reporting

### 5.2 Pre-advisement and expected trucks

CargoMan helps a site know what is expected before a truck reaches the gate.

Typical capabilities include:

- Expected-truck or pre-advisement records
- Vehicle, transporter, cargo, client, order, origin, and reference information
- Import of expected movements from controlled templates where configured
- Duplicate detection and data validation
- Matching expected vehicles to arrival and access-control events
- Visibility into used, unused, arrived, entered, and outstanding movements
- Site- and client-specific access to planning data

### 5.3 Access control and gate management

The access-control module manages the operational record of people and vehicles entering and leaving a site.

Typical capabilities include:

- Arrival, entry, and exit timestamps
- Gate and exit-gate recording
- Vehicle and driver information
- Visit or movement type
- Site, client, order, and transporter context
- Security questions and checks
- Linkage to expected-truck records
- Current on-site status
- Controlled access based on user role
- Full audit history of changes

The website should distinguish operational access control from physical security hardware. Avoid claiming native barrier, biometric, ANPR, or licence-disc integrations unless those are confirmed for the specific deployment.

### 5.4 Weighbridge operations

CargoMan supports end-to-end weighbridge transaction processing and is designed to work with a range of weighbridge environments.

Typical capabilities include:

- Gross, tare, and nett weight capture
- Inbound and outbound weighing workflows
- Association to trucks, transporters, clients, orders, cargo, and sites
- Reduced manual entry through lookups and operational context
- Duplicate-ticket prevention
- Configurable ticket and report layouts
- Ticket printing and electronic distribution where configured
- Stock and cargo movement linkage
- VGM-related capture where required
- Historical transaction search and reporting
- Integration with compatible weighbridge indicators and site equipment

Do not claim compatibility with every weighbridge. Use wording such as “designed to integrate with most common weighbridge environments, subject to interface assessment.”

### 5.5 Warehouse operations

CargoMan supports the controlled movement of cargo through receiving, storage, packing, and dispatch.

Typical capabilities include:

- Product receiving
- Product dispatching
- Item- and barcode-level control
- Client barcode and internal barcode support
- Lot management
- Quantities, gross weight, nett weight, and related measurements
- Warehouse and zone allocation
- Stock status and balance tracking
- Packing workflows
- Damage and exception capture
- Photos, signatures, and supporting documentation
- Printable GRNs, GDNs, and operational reports
- Validation to prevent invalid or conflicting movements

The website should convey that CargoMan can manage bulk-style quantities as well as individually traceable cargo items, depending on the operation.

### 5.6 Barcode, lot, and item traceability

CargoMan provides a detailed chain of custody for cargo that requires individual identification.

Typical capabilities include:

- Unique internal barcodes
- Customer or supplier barcode references
- Lot and order association
- Scan-based receiving, packing, and dispatch
- Current status and location context
- Conflict and duplicate validation
- Transaction history across the item lifecycle
- Quantity and weight handling, including split-package scenarios where configured

### 5.7 Container lifecycle management

CargoMan tracks container-related operational events and their relationship to cargo, vehicles, orders, and evidence.

Depending on the site configuration, events can include:

- Empty-container movements
- Container full-in
- Container packing
- Container full-out
- Container numbers and seal information
- Truck, driver, transporter, order, and site association
- Packed-item detail
- Damage records
- Photos and signatures
- Status history and supporting documents

Use “configurable container lifecycle” on the public site unless the exact standard event set is confirmed.

### 5.8 Mobile capture and offline operations

CargoMan is built for operational sites, not only reliable office networks.

Key themes for the website:

- Operators can capture work where the work happens
- Scan-first workflows reduce manual entry
- Local operational data can support continued work during connectivity interruptions
- Records can synchronise between site and central environments
- Background evidence upload supports photo-heavy workflows
- Conflict handling protects server truth and highlights operational exceptions
- Confirmed transactions can be locked to protect record integrity

Avoid absolute claims such as “works forever without internet” or “zero data loss.” Explain that supported workflows are offline-capable and synchronise when connectivity becomes available.

### 5.9 Evidence, documents, damages, and signatures

Operational evidence is part of the transaction record.

Capabilities include:

- Transaction-linked photographs
- Mandatory photo requirements where configured
- Damage classification and notes
- Digital signatures for relevant roles
- Supporting files and scanned documents
- Date, time, user, and record association
- Evidence retrieval for investigation and dispute handling

### 5.10 Reporting, dashboards, and KPIs

CargoMan converts operational data into usable management information.

Typical capabilities include:

- Live and historical dashboards
- Receive and dispatch transactions
- Stock movement and order balances
- Weighbridge activity
- Truck arrivals, site occupancy, and turnaround information
- Container status and movements
- User and operational activity
- Exceptions, damages, and incomplete processes
- KPI management
- Client-, site-, order-, product-, and date-based filtering
- Export to common formats such as Excel, PDF, and CSV where supported
- Configurable operational documents and reports

### 5.11 Storage, rates, and commercial control

Where configured, CargoMan can support the operational information required for storage and service charging.

Possible capabilities include:

- Storage-day and quantity calculations
- Rate definitions
- Transaction and handling charge support
- Supporting schedules and reports
- Invoice-control workflows
- Traceability from a charge back to operational activity

This area may vary substantially between deployments. Do not market CargoMan as a full accounting system. It can complement or integrate with financial systems.

### 5.12 Administration, permissions, and auditability

CargoMan uses role-based access to control what users can see and do.

Typical capabilities include:

- User and role administration
- Module-, record-, and field-level restrictions where configured
- Site-, client-, or operational-scope access
- Read, create, edit, delete, and workflow permissions
- Client portal roles that expose only authorised information
- Audit and change history
- Controlled integration-user permissions

### 5.13 Optional and deployment-specific modules

Some CargoMan environments include additional workflows such as rail operations, vessel or job-card processes, time capture, specialist cargo handling, external licence-disc scanning, or customer-specific workflows. Present these as configurable or tailored capabilities, not universal standard modules, until confirmed.

---

## 6. Differentiators

The website should emphasise these differences:

### One operational record

Gate, weighbridge, warehouse, mobile, container, and reporting activity share operational context. Users do not have to reconstruct a movement from disconnected systems.

### Built for cargo sites

CargoMan is shaped around the realities of terminals, warehouses, depots, mines, and weighbridge operations rather than generic inventory theory.

### Gate-to-dispatch visibility

The platform follows the complete operational journey—from an expected truck to arrival, weighing, cargo handling, evidence, dispatch, and exit.

### Online and site-resilient operation

Supported workflows can combine central visibility with local/offline execution and synchronisation, which is important at sites with intermittent connectivity.

### Evidence by design

Photos, damages, signatures, and documents live alongside the operational transaction.

### Configurable without losing control

Workflows, permissions, reports, lookup data, and transaction rules can be adapted to the site while maintaining structured, auditable records.

### Detailed traceability

CargoMan can trace movements at order, lot, transaction, quantity, weight, container, and individual-item/barcode level.

### Integration-friendly

The platform can expose or exchange information through authenticated APIs, OData-style queries, custom endpoints, SQL views, and outbound posting patterns.

---

## 7. Brand and communication principles

### Brand personality

CargoMan should feel:

- Operationally credible
- Modern but not fashionable for its own sake
- Confident and direct
- Technically capable
- Dependable
- Practical and grounded in real logistics work
- South African-built with the ability to serve broader markets, if this positioning is approved

### Writing style

- Use plain, precise business language
- Lead with operational outcomes, then explain the technology
- Prefer “control,” “trace,” “connect,” “capture,” “validate,” and “see”
- Keep paragraphs short
- Use recognisable cargo terminology
- Avoid inflated language such as “revolutionary,” “game-changing,” or “AI-powered” unless a specific feature supports it
- Avoid presenting CargoMan as an ERP replacement
- Avoid vague claims such as “complete digital transformation”
- Avoid unverified claims about uptime, savings, throughput improvements, certifications, user counts, sites, or customers

### Suggested message hierarchy

1. Control every cargo movement from gate to dispatch
2. Connect weighbridge, warehouse, gate, mobile, and reporting operations
3. Gain traceability, evidence, and live visibility
4. Configure CargoMan around the realities of each site
5. Integrate with the wider systems landscape

### Suggested calls to action

Primary:

- Book a demo
- Talk to CargoMan

Secondary:

- Explore the platform
- See how it works
- Discuss your operation

Avoid “Start free” unless a self-service trial genuinely exists.

---

## 8. Website objectives

The public website must:

1. Explain what CargoMan is within the first screen.
2. Show that it is broader than a WMS without making the message confusing.
3. Demonstrate a connected gate-to-dispatch workflow.
4. Establish credibility with real product interfaces, operational knowledge, deployment explanations, and eventually customer evidence.
5. Help a visitor identify the modules relevant to their operation.
6. Convert qualified visitors into demo or consultation enquiries.
7. Give IT and integration stakeholders enough technical confidence to continue a conversation.
8. Work exceptionally well on mobile, even though the typical buyer may first view it on desktop.
9. Be easy for the CargoMan team to update with new modules, case studies, screenshots, and industries.
10. Be fast, accessible, searchable, secure, and professional.

---

## 9. Recommended sitemap

### Essential launch pages

- `/` — Home
- `/platform` — Platform overview
- `/solutions/weighbridge`
- `/solutions/warehouse`
- `/solutions/gate-access-control`
- `/solutions/mobile-operations`
- `/solutions/container-management`
- `/solutions/reporting-integrations`
- `/industries` — Industry overview
- `/about`
- `/contact` or `/book-a-demo`
- `/privacy`
- `/terms`

### Strong second-phase pages

- `/industries/terminals-depots`
- `/industries/warehousing`
- `/industries/mining-mineral-logistics`
- `/industries/container-operations`
- `/capabilities/offline-sync`
- `/capabilities/evidence-traceability`
- `/integrations`
- `/case-studies`
- `/resources`
- Individual case-study and resource pages

Do not create dozens of thin SEO pages at launch. Fewer credible pages are preferable.

---

## 10. Homepage content structure

### 10.1 Header

Include:

- CargoMan logo
- Platform
- Solutions
- Industries
- About
- Contact
- Primary “Book a demo” button

Use a sticky header that becomes slightly more compact on scroll. Mobile navigation must be simple, accessible, and keyboard friendly.

### 10.2 Hero

Suggested headline:

> Control every cargo movement, from gate to dispatch.

Suggested supporting copy:

> CargoMan connects gate control, weighbridge operations, warehouse workflows, mobile teams, evidence, and reporting in one logistics execution platform.

Suggested buttons:

- Book a demo
- Explore the platform

Hero visual:

- Prefer a refined composition of genuine CargoMan screens across desktop, browser, and handheld devices
- Alternatively, show a visual operational journey with product UI layered over a terminal or warehouse context
- Do not use a generic full-width stock photograph as the only hero visual
- Do not fabricate UI screenshots that imply unavailable features

### 10.3 Credibility strip

Use customer logos only after approval. Until then, use a capability-oriented strip such as:

> Built for cargo terminals · Warehouses · Weighbridges · Depots · Multi-site logistics

Do not invent “trusted by” logos or numerical proof.

### 10.4 Connected operations section

Headline:

> One platform across the movement

Show the connected workflow:

- Plan
- Gate
- Weigh
- Receive / handle
- Store / pack
- Dispatch
- Report

On desktop, an interactive but accessible workflow can reveal a short explanation and relevant product screenshot. On mobile, use stacked cards or a horizontally scrollable, snap-aligned sequence with a non-JavaScript fallback.

### 10.5 Core solution cards

Use six focused cards:

1. Gate & access control
2. Weighbridge operations
3. Warehouse & stock
4. Container lifecycle
5. Mobile & offline execution
6. Reporting & integration

Each card should contain one outcome-oriented sentence and a clear link. Avoid decorative cards with no information.

### 10.6 Traceability and evidence section

Headline:

> Know what happened—and prove it.

Explain item-level traceability, transaction histories, photos, signatures, damage capture, documents, timestamps, and audit records. This is an important differentiator and deserves its own visual section.

### 10.7 Mobile/offline section

Headline:

> Operations continue where the work happens.

Show handheld scanning and transaction capture alongside central visibility. Explain supported offline-capable workflows carefully and avoid absolute guarantees.

### 10.8 Management visibility section

Show a real dashboard or report and explain that operations teams can move from live status to detailed transaction evidence. Mention filtering, exports, stock movement, order balances, KPIs, and audit history.

### 10.9 Configuration and integration section

Explain that CargoMan can fit into an existing environment through controlled permissions, configurable workflows, reports, APIs, views, and customer-specific endpoints.

### 10.10 Industry section

Use a compact set of industry scenarios rather than empty labels. For example:

- **Terminals and depots:** Coordinate trucks, cargo, weighing, storage, and dispatch.
- **Warehouses:** Maintain item, lot, order, and evidence-based control.
- **Mining logistics:** Track expected movements, origin data, weights, and site handovers.
- **Container operations:** Connect container events to cargo, trucks, seals, photos, and signatures.

### 10.11 Case study or proof section

The component should be built, but publish it only when approved source material exists. A useful case-study structure is:

- Customer context
- Operational problem
- CargoMan configuration
- Workflow implemented
- Measured result
- Customer quote

No placeholder result should appear as a real claim.

### 10.12 Final CTA

Headline:

> Let’s map CargoMan to your operation.

Supporting copy:

> Show us how cargo moves through your site, and we’ll demonstrate how CargoMan can connect the process.

Button:

- Book a demo

### 10.13 Footer

Include:

- Short product statement
- Platform and solution links
- Contact details
- Company/legal name once confirmed
- Privacy and terms
- LinkedIn only if an active official profile exists
- Copyright year generated programmatically

---

## 11. Solution-page template

Every solution page should tell an operational story rather than repeat a feature list.

Recommended structure:

1. Outcome-led hero
2. The operational problem
3. How the CargoMan workflow works
4. Key capabilities
5. Product screenshots or workflow visual
6. Connected modules
7. Evidence, controls, and reporting
8. Integration or deployment considerations
9. Relevant industry scenario or approved case study
10. Demo CTA

Each page should have unique content, metadata, and internal links.

---

## 12. Visual direction

### Overall aesthetic

The site should look like a serious modern industrial software platform: clean, precise, spacious, high-contrast, and product-led. It must balance the physical nature of logistics operations with the clarity of modern enterprise software.

Avoid:

- Generic “blue SaaS template” styling
- Excessive gradients and glowing effects
- Futuristic logistics imagery unrelated to the actual product
- Busy dashboards used as wallpaper
- Large amounts of tiny text inside mock devices
- Stock photographs of random handshakes or call-centre staff
- Cargo ships as the only visual metaphor; CargoMan covers much more than maritime freight
- Animation that slows down or obscures the content

### Colour

Use the existing CargoMan logo and brand palette if supplied. If no approved palette exists, begin with a restrained provisional system:

- Deep navy/ink for authority and high-contrast surfaces
- Clean white or warm off-white for content space
- Strong blue or teal as the primary interaction colour
- Amber/orange used sparingly for operational emphasis and calls to action
- Slate neutrals for diagrams and secondary information
- Green, amber, and red reserved for meaningful statuses, not decoration

All colours must meet WCAG AA contrast requirements. Treat this palette as a design proposal, not final brand approval.

### Typography

- Use a modern, highly legible sans-serif family
- Headlines should be confident and compact, not oversized to the point of wasting the first screen
- Body text should remain comfortable at common laptop and mobile widths
- Use tabular numerals for metrics, weights, quantities, and dashboard previews
- Limit the number of font families and weights
- Self-host fonts where licensing allows, or use a robust system stack

### Layout

- Use a consistent max-width content grid
- Give dense product information enough white space
- Alternate between product UI, operational context, and concise explanatory copy
- Use asymmetry selectively, while keeping key reading paths obvious
- Avoid putting every section inside a rounded card
- Use section borders, background shifts, and spacing to create structure

### Product imagery

Real CargoMan screenshots should be the primary evidence. Prepare them carefully:

- Use realistic but anonymised data
- Remove personal information, customer-confidential data, server addresses, tokens, and credentials
- Present one clear idea per screenshot
- Crop to the relevant workflow
- Use subtle frames and shadows
- Provide alt text that explains what the interface demonstrates
- Do not place screenshots so small that their contents cannot be understood

### Operational photography

When used, photography should show authentic environments: gates, weighbridges, warehouses, cargo, scanners, containers, trucks, and operators. Use photographs to give context; use the product interface to prove capability.

### Motion

Recommended:

- Subtle entrance transitions
- A workflow line or state change that responds to scrolling
- Gentle device/UI transitions
- Small hover and focus feedback
- Number animations only for verified metrics

Requirements:

- Respect `prefers-reduced-motion`
- Avoid autoplay video with sound
- Do not make content dependent on scroll animation
- Keep animation performant on mid-range mobile devices

---

## 13. UX and responsive behaviour

- Design mobile-first, then use wider layouts to increase context—not merely font size
- Keep the primary CTA visible but not intrusive
- Use a clear information hierarchy and short scan-friendly sections
- Do not hide core product information inside carousels
- If tabs are used, make all content discoverable by keyboard and search engines
- Keep tap targets at least 44×44 CSS pixels where practical
- Use visible focus states
- Forms must retain entered values after validation errors
- Use descriptive errors, not generic “something went wrong” messages
- Every interaction must work without hover
- Test common widths around 360 px, 768 px, 1024 px, 1440 px, and large desktop screens
- Avoid horizontal overflow, including in screenshots, workflow diagrams, and data tables

---

## 14. Accessibility

Target WCAG 2.2 AA.

Minimum requirements:

- Semantic landmarks and heading order
- Keyboard-accessible navigation and controls
- Visible focus indicators
- Sufficient colour contrast
- Labels for every form control
- Clear validation instructions and error associations
- Meaningful alternative text
- Decorative images hidden from assistive technology
- Captions or transcripts for material video content
- Reduced-motion support
- No information conveyed through colour alone
- Accessible dialogs, menus, tabs, and accordions
- Logical reading order at every breakpoint

Run automated accessibility checks, then manually test keyboard navigation and screen-reader-friendly structure.

---

## 15. Technical implementation guidance

### First rule: inspect before replacing

If a codebase already exists:

- Identify the framework and build tooling
- Read existing project instructions
- Reuse the design system and approved dependencies
- Preserve hosting and deployment configuration
- Avoid a full rewrite unless explicitly requested

### Recommended default for a new build

If there is no existing technical direction, a strong default is:

- React with a server-rendering framework such as Next.js
- TypeScript in strict mode
- Component-based styling using the repository’s preferred approach; Tailwind CSS is acceptable for a new project
- Content stored in typed local data or MDX initially, with a clean path to a CMS later
- Server-side handling for forms and secrets
- Optimised responsive images
- Static generation for marketing pages where practical
- A small, purposeful dependency set

Do not add a CMS, analytics platform, authentication system, or complex animation library merely because it is common. Add infrastructure only when there is a clear requirement.

### Suggested component architecture

- `SiteHeader`
- `MobileNavigation`
- `Hero`
- `LogoStrip` or `CapabilityStrip`
- `OperationalJourney`
- `SolutionCard`
- `ProductScreenshot`
- `EvidenceSection`
- `IndustryCard`
- `CaseStudyCard`
- `IntegrationOptions`
- `DemoCTA`
- `ContactForm`
- `SiteFooter`
- Reusable `Section`, `Container`, `Button`, `Badge`, and typography primitives

Keep content data separate from layout where practical so capabilities, industries, navigation, and case studies can be maintained without editing multiple components.

### Content model

At minimum, model:

- Pages
- Solutions
- Industries
- Capabilities
- Screenshots/media
- Case studies
- Testimonials
- FAQs
- Contact/demo enquiries
- SEO metadata

All draft-only content should have an explicit status and should not render in production.

### Contact and demo forms

Recommended fields:

- Name
- Work email
- Company
- Phone, optional
- Type of operation
- Location / country
- Short description of the requirement
- Consent acknowledgement linked to privacy policy

Implementation requirements:

- Validate on client and server
- Rate-limit and protect against automated spam
- Do not expose mail or API credentials to the browser
- Provide a clear success state and expected response wording
- Log failures without logging confidential form content unnecessarily
- Do not claim that a message was sent if downstream delivery failed
- Route submissions only to a confirmed destination

### Security and privacy

- Keep secrets in server-side environment configuration
- Use secure headers and a strict content security policy where compatible
- Minimise third-party scripts
- Obtain consent before non-essential tracking where legally required
- Publish a real privacy notice before collecting enquiries
- Sanitise any rendered external or CMS content
- Keep dependencies updated and review production packages
- Never publish real operational credentials or customer-confidential screenshot data

### Performance

Targets should be measured on representative mobile hardware and network conditions.

- Optimise hero media and avoid a large autoplay video as the largest content element
- Serve responsive image sizes and modern formats
- Lazy-load below-the-fold media
- Keep client-side JavaScript modest
- Prevent layout shift by reserving image and component space
- Prefer CSS for simple interaction and motion
- Load only the font weights in use
- Monitor Core Web Vitals after deployment

---

## 16. SEO and structured content

### Search themes

Use naturally where relevant:

- Cargo management software
- Logistics execution platform
- Weighbridge software
- Warehouse and weighbridge integration
- Gate access control for logistics sites
- Cargo tracking and traceability
- Container management software
- Warehouse receiving and dispatch software
- Offline logistics software
- Bulk terminal management software
- Mining logistics software
- Stock movement and cargo reporting

Do not stuff keywords or create inaccurate combinations merely for search traffic.

### On-page requirements

- One clear H1 per page
- Unique title and meta description
- Descriptive URLs
- Canonical metadata
- Open Graph and social-sharing metadata
- Organisation and software/application structured data where accurate
- Breadcrumb structured data on deeper pages
- XML sitemap and robots configuration
- Useful internal links between platform, solutions, industries, and case studies
- Descriptive image filenames and alt text

### Suggested homepage metadata

**Title:** CargoMan | Cargo, Weighbridge & Logistics Operations Platform

**Description:** Connect gate control, weighbridge operations, warehouse workflows, cargo tracking, mobile evidence, and reporting with CargoMan.

Revise this after keyword and competitor research; it is a starting point.

---

## 17. Analytics and conversion measurement

If analytics is approved, measure useful actions rather than vanity traffic alone:

- Demo form started and completed
- Contact link clicked
- Phone or email action clicked
- Platform and solution pages viewed
- Case study viewed
- Integration information viewed
- CTA source section
- Form errors and abandonment, without capturing sensitive field values

Use a privacy-conscious implementation and document event names. Do not install multiple overlapping tracking products.

---

## 18. Content and assets required from CargoMan

The build can begin with structured placeholders, but the following must be collected before final launch:

- Approved CargoMan logo files, ideally SVG plus raster fallbacks
- Approved colour palette and fonts, if they exist
- Legal company name, registration information, and primary contact details
- Confirmed service regions
- Approved product description and claims
- High-resolution, anonymised screenshots for each major module
- Mobile screenshots or device captures
- Authentic operational photography with usage rights
- Approved customer logos
- Approved testimonials
- At least one case study with measurable, defensible results
- Deployment, support, hosting, backup, and uptime wording approved by the business
- Privacy policy and terms
- Confirmed destination and workflow for demo enquiries
- Official social profiles

Never silently replace missing proof with fabricated content. Use clearly labelled draft placeholders in development and prevent them from shipping.

---

## 19. Claims and terminology guardrails

### Safe general claims

- CargoMan connects gate, weighbridge, warehouse, mobile, and reporting workflows.
- It supports item-, barcode-, lot-, order-, transaction-, and container-level traceability depending on configuration.
- It provides role-based access and audit history.
- It supports integration through controlled APIs and other agreed exchange methods.
- It supports offline-capable operational workflows and synchronisation in configured deployments.
- It can be adapted to the requirements of different cargo sites.

### Claims requiring confirmation before publication

- Exact number of customers, users, sites, transactions, or countries
- Specific uptime percentage or service-level agreement
- Exact cost savings or throughput improvements
- Named customer relationships
- Regulatory compliance or certification
- Compatibility with a named weighbridge indicator, ERP, accounting platform, or hardware device
- “Real-time” where synchronisation or operational processes introduce delay
- “Fully offline” or “zero data loss”
- “End-to-end” if a page implies control beyond CargoMan’s actual operational scope
- AI capabilities
- Exact pricing

### Terminology

- Use **nett** when referring to CargoMan field terminology if that is the established UI wording; use **net weight** in general marketing prose for wider readability.
- Explain specialist terms such as VGM on first use.
- Use “client” for the cargo owner/customer within the product only where the meaning is clear; use “customer” for CargoMan’s own customer relationship.
- Use “site” for an operational location and “tenant” only in technical material, not public marketing copy.

---

## 20. Initial copy bank

These are starting points, not locked final copy.

### Hero options

1. **Control every cargo movement, from gate to dispatch.**
2. **One operational view across your cargo site.**
3. **Connect the gate, weighbridge, warehouse, and every movement between them.**

### Supporting copy options

- CargoMan brings vehicles, cargo, weights, stock, evidence, and reporting into one controlled logistics workflow.
- Replace fragmented operational records with connected workflows built for terminals, warehouses, depots, and weighbridge sites.
- Give every team the right operational context—from expected arrival and first weigh to final dispatch and audit trail.

### Section headlines

- One platform across the movement
- Know what happened—and prove it
- Built for the site, visible from anywhere
- Move faster without losing control
- Trace every item, lot, order, and container
- Your operation is connected. Your systems can be too.
- From live status to the underlying evidence

### Short module descriptions

**Gate & access control**  
Match expected movements, record arrivals and entry, and maintain a clear view of vehicles and people on site.

**Weighbridge operations**  
Connect accurate weight capture to the right vehicle, cargo, order, and transaction.

**Warehouse & stock**  
Control receiving, storage, packing, and dispatch with order-, lot-, item-, and barcode-level traceability.

**Container lifecycle**  
Track configurable container movements, packed cargo, seals, vehicles, photos, and signatures in one history.

**Mobile operations**  
Put scan-first capture, validation, photos, damages, and signatures in the hands of the operating team.

**Reporting & integration**  
Turn operational records into dashboards, documents, exports, and controlled data exchange.

---

## 21. Build phases

### Phase 1 — Foundation

- Inspect existing repository and assets
- Confirm brand direction and content architecture
- Establish design tokens and core components
- Build responsive header, footer, layout, buttons, and forms
- Add metadata, sitemap, robots, and baseline structured data

### Phase 2 — Core launch experience

- Build homepage
- Build platform overview
- Build core solution pages
- Build industries overview
- Build about and contact/demo pages
- Add approved screenshots and imagery
- Add privacy and terms content

### Phase 3 — Proof and optimisation

- Add case studies and testimonials
- Add deeper industry pages
- Add integration content
- Implement approved analytics
- Test conversion paths
- Improve content based on real visitor and sales feedback

### Phase 4 — Ongoing content

- Resources and operational guides
- Customer stories
- Product updates
- Search-led articles based on genuine buyer questions

---

## 22. Definition of done

The initial website is ready only when:

- The first viewport clearly explains what CargoMan is
- All published capability claims are approved and accurate
- No fabricated customers, testimonials, metrics, or integrations exist
- Navigation and every core journey work at all target breakpoints
- Forms are connected to a confirmed, tested destination
- Product screenshots contain no confidential information
- Accessibility checks and keyboard testing pass
- Metadata, social cards, sitemap, and robots rules are correct
- Performance is acceptable on mobile and desktop
- There are no console errors, broken links, empty routes, or placeholder text
- Error, empty, loading, and success states are intentionally designed
- Legal pages and consent wording are in place
- Production configuration contains no exposed secrets
- The site has been reviewed by someone who understands CargoMan operations

---

## 23. Final instruction to the coding agent

Build a distinctive, product-led B2B website that makes CargoMan’s operational breadth easy to understand. The visitor should leave with three ideas:

1. CargoMan controls the connected cargo journey from gate to dispatch.
2. It combines weighbridge, warehouse, gate, mobile, evidence, and reporting workflows in one platform.
3. It is configurable for serious real-world logistics operations and can integrate with the systems around it.

Prioritise clarity, credibility, genuine product proof, responsive usability, accessibility, and performance. Use the supplied facts and approved assets. When a capability, statistic, customer claim, or design decision is uncertain, represent it as a clearly marked content decision for review rather than inventing an answer.

