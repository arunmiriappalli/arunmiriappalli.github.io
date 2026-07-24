export const contact = {
  location: 'Bengaluru, India',
  email: 'arunmchaitanya@outlook.com',
  linkedin: 'https://linkedin.com/in/arunchaitanyam',
};

export const summary = `Engineering leader with 14+ years of experience building and scaling fintech and SaaS
platforms in fast-growing startup environments. Track record of leading global engineering teams
(45-80+), shipping payment and financial products, and aligning engineering execution with business
outcomes in Series A-C companies. Focused on AI-enabled automation, data-driven decision systems,
cloud-native architectures, and cost-efficient execution — including cutting engineering burn by 30%
and modernizing platforms under regulatory constraints.`;

export const coreExpertise = [
  'Fintech & Payments Platforms',
  'AI-enabled Systems & Workflow Automation',
  'SaaS Architecture & Platform Engineering',
  'Cloud-Native Systems (AWS)',
  'Data Platforms & Real-Time Processing',
  'Engineering Leadership & Hiring',
  'Cost Optimization & Scalability',
  'Startup Execution (0→1, 1→10)',
  'Compliance-Aware System Design',
];

export type EmploymentEntry = {
  role: string;
  org: string;
  place: string;
  time: string;
  bullets: string[];
};

export const employment: EmploymentEntry[] = [
  {
    role: 'Head of Engineering',
    org: 'BukuWarung',
    place: 'Hyderabad, India',
    time: 'Jul 2021 – Present',
    bullets: [
      'Led engineering for all payments and financial products processing ~4M transactions monthly, supporting 100K+ daily active SMB merchants across Indonesia, with Philippines expansion underway.',
      'Partnered with founders and leadership to define multi-year engineering strategy aligned with growth, cost efficiency, and product-market fit in a Series A fintech environment.',
      'Architected cloud-native, compliance-first platforms (BI, OJK, ISO), improving uptime from 96% to 99.9% and increasing transaction success rates from 98% to 99.2% while working with external PSPs.',
      'Introduced data-driven and AI-assisted automation across engineering, operations, and customer support, reducing overall engineering burn by 30% and infrastructure + subscription costs by 65%.',
      'Built and scaled cross-functional teams of 45+ engineers (Android, Web, Data, DevOps, QA), establishing hiring standards, engineering guidelines, and execution metrics.',
      'Accelerated product delivery by reducing release cycles from weekly to daily and cutting time-to-market for new products from 8 months to under 2 months.',
      'Improved operational efficiency through AI-enabled systems: automated sales route planning, reduced device operations team from 6 to 2 through faster incident detection, and cut customer support resolution time from ~6 hours to under 2 minutes using chatbot-driven workflows.',
    ],
  },
  {
    role: 'Vice President of Engineering',
    org: 'Works Applications',
    place: 'Singapore',
    time: 'May 2018 – Jun 2021',
    bullets: [
      'Led an 80-member global engineering organization with 8 direct reports across Tokyo, Shanghai, Chennai, and Singapore, supporting large-scale SaaS platforms.',
      'Drove modernization of core platforms using cloud-native and data-centric architectures, enabling scalability, performance improvements, and operational automation.',
      'Delivered a 100x performance improvement in month-end batch and financial processing through architectural redesign and data pipeline optimization.',
      'Reduced AWS infrastructure costs through capacity planning, system redesign, and automation while improving platform reliability.',
      'Oversaw adoption of modern technology stacks including AWS Aurora, microservices, Angular, and Spring, balancing speed with platform stability.',
      'Established engineering standards, architectural review processes, and cross-region collaboration models for distributed teams.',
    ],
  },
  {
    role: 'Engineering Manager',
    org: 'Works Applications',
    place: 'Singapore',
    time: 'Mar 2016 – Apr 2018',
    bullets: [
      'Owned platform engineering and developer productivity initiatives, enabling faster feature delivery across multiple SaaS product lines.',
      'Built internal frameworks and abstractions over open-source technologies to standardize development and improve engineering efficiency.',
      'Served as an architecture reviewer across product lines, contributing to decisions on microservices, Kubernetes, ELB, batch systems, and data platforms.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Works Applications / Microsoft',
    place: '',
    time: '2012 – 2016',
    bullets: [
      'Built data-intensive backend systems and platform libraries using Cassandra, Elasticsearch, Kafka, Redis, and AWS.',
      'Improved performance and scalability of customer-facing systems through caching, search optimization, and backend redesign.',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech), Computer Science and Engineering',
    school: 'Indian Institute of Technology (IIT), Hyderabad',
    time: '2008 – 2012',
    note: 'Graduated with Honours · Patent Holder',
  },
];

export const skills = [
  {
    category: 'AI, Data & Platform',
    items: [
      'AI-assisted automation for engineering, operations & support',
      'Data-driven systems for risk assessment and operational insights',
      'Large-scale data platforms: Kafka, Cassandra, Elasticsearch, EMR',
      'Real-time and batch data processing',
      'Cloud-native architectures on AWS (Aurora, Kubernetes, Microservices)',
    ],
  },
];

export const interests = ['Music', 'Movies', 'Table Tennis', 'Travelling', 'Cooking'];
