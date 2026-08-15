export const person = {
  name: "LERATO DU PLESSIS",
  title: "Test Engineer II",
  tagline:
    "SDET | Automation, API Testing & CI/CD — building toward DevOps & Platform Engineering",
  location: "Johannesburg, South Africa",
  links: {
    github: "https://github.com/LeratoDup",
    portfolio: "https://portfolio-site-bice-rho.vercel.app/",
    linkedin: "https://www.linkedin.com/in/lerato-du-plessis/",
    email: "mailto:leratomokotedi0@gmail.com",
  },
};

export const skillGroups: Array<{
  title: string;
  icon: string; // Font Awesome class, e.g. "fa-solid fa-eye"
  tint: "blue" | "violet" | "teal" | "rose";
  items: string[];
}> = [
  {
    title: "Manual & Functional Testing",
    icon: "fa-solid fa-eye",
    tint: "violet",
    items: [
      "Functional, Regression & Integration Testing",
      "Requirement Analysis & Test Scenario Design",
      "Exploratory & Risk-Based Testing",
      "Defect Lifecycle Management",
      "UAT & Release Readiness",
    ],
  },
  {
    title: "Automation & Quality Engineering",
    icon: "fa-solid fa-terminal",
    tint: "rose",
    items: [
      "Playwright Framework Design (Page Object Model, fixture-based auth)",
      "Cross-Browser & Mobile Emulation Testing",
      "Visual Regression & Trace-Based Debugging",
      "Combined UI + API Test Design",
    ],
  },
  {
    title: "API & Backend Testing",
    icon: "fa-solid fa-cloud-arrow-up",
    tint: "blue",
    items: [
      "Postman & Newman API Test Suites (Key & Token Auth)",
      "API Mocking & Network-Level Test Control",
      "CI/CD Integration (Newman)",
    ],
  },
  {
    title: "Database Testing",
    icon: "fa-solid fa-database",
    tint: "teal",
    items: [
      "Advanced SQL — Joins, Aggregations, Window Functions, Execution Plans",
      "Data Integrity & Consistency Validation",
      "Cross-Layer Validation (UI/API/DB)",
    ],
  },
  // {
  //   title: "CI/CD & DevOps",
  //   items: [
  //     "Integrate automated test suites into pipelines using Azure DevOps",
  //     "Configure and maintain YAML pipelines across multi-stage environments",
  //     "Trigger automated execution on scheduled runs and pipeline events",
  //     "Generate reports and artifacts for test visibility and release readiness",
  //   ],
  // },
];

export const toolbox = [
  "Playwright",
  "Postman",
  "Newman",
  "SQL",
  "Leapwork",
  "ACCELQ",
  "GitHub",
  "Azure DevOps",
  "Jira",
];

export type Certification = {
  name: string;
  issuer?: string;
  date?: string; // e.g. "Jun 2026" — only set when actually known
  credentialId?: string;
  status: "verified" | "in-progress";
  progress?: number; // 0-100, only used when status is "in-progress"
  targetDate?: string;
  attachment: string | null;
};

export const certifications: Certification[] = [
  {
    name: "Playwright JS/TS Automation Testing from Scratch & Framework",
    issuer: "Rahul Shetty Academy - Udemy",
    date: "Aug 2026",
    status: "verified",
    attachment: "/certs/Playwright.pdf",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals - AZ-900",
    issuer: "Microsoft",
    date: "Jun 2026",
    status: "verified",
    attachment: "/certs/Az-900.pdf", // e.g. "https://learn.microsoft.com/api/credentials/share/en-us/..."
  },

  {
    name: "Postman: The Complete Guide - REST API Testing",
    issuer: "Valentin Despa - Udemy",
    date: "Jun 2026",
    status: "verified",
    attachment: "/certs/Postman api testing.pdf",
  },
  {
    name: "ISTQB Foundation Level",
    issuer: "ISTQB",
    date: "Sep 2025",
    status: "verified",
    attachment: "/certs/sastqb_Lerato Du Plessis_CTFL.png",
  },
  {
    name: "Fundamental Leapwork Automation for Web Applications",
    issuer: "Leapwork",
    date: "Jun 2025",
    status: "verified",
    attachment: "certs/Leapwork web fundamental.pdf",
  },
  {
    name: "ACCELQ Automation Engineer",
    issuer: "ACCELQ",
    date: "May 2024",
    status: "verified",
    attachment: "/certs/Accelq automation engineer.pdf",
  },
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    date: "May 2023",
    status: "verified",
    attachment: "/certs/Salesforce platform developer 1.pdf",
  },
  {
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    date: "Jun 2023",
    status: "verified",
    attachment: "/certs/Salesforce Administrator.pdf",
  },
  {
    name: "Salesforce Certified Platform App Builder",
    issuer: "Salesforce",
    date: "Dec 2022",
    status: "verified",
    attachment: "/certs/Salesforce platform app builder .pdf",
  },

  {
    name: "Lean Six Sigma Yellow Belt",
    date: "Jun 2022",
    status: "verified",
    attachment: "/certs/Lean six sigma .pdf",
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate - AZ-104",
    issuer: "Microsoft",
    status: "in-progress",
    attachment: null,
  },
];

export const experience = [
  {
    company: "LINKITSYSTEMS",
    role: "Test Engineer II",
    dates: "Apr 2025 to Present",
    bullets: [
      "Own end-to-end test design and execution across functional, regression, and integration testing, catching defects before release and protecting production stability",
      "Validate REST API behaviour and data accuracy using Postman, closing gaps between expected and actual system responses",
      "Write test plans defining scope, timelines, and strategy, giving delivery teams clear visibility into coverage and risk",
      "Log, triage, and verify defects through to resolution, directly improving system stability and release quality",
    ],
  },
  {
    company: "DELOITTE",
    role: "Analyst",
    dates: "Mar 2023 to Mar 2025",
    bullets: [
      "Designed and executed functional, regression, and integration test cases across multiple concurrent client projects",
      "Validated API endpoints and responses through Postman-based REST API testing, ensuring data integrity across integrations",
      "Drove timely defect resolution as an active participant in Agile Scrum ceremonies (standups, sprint planning, retros)",
      "Partnered with stakeholders to gather requirements and translate them into complete, traceable test coverage",
      "Authored clear, structured test documentation adopted as a reference across project teams",
    ],
  },
  {
    company: "DELOITTE",
    role: "Junior Analyst — InfinityX Graduate Programme",
    dates: "Jan 2022 to Mar 2023",
    bullets: [
      "Executed predefined test cases, identifying and logging defects with clear reproduction steps",
      "Tracked bugs through defect management tools from identification to closure",
      "Maintained test documentation and traceability matrices to support audit and handover",
      "Reviewed requirements for testability, flagging ambiguities before test design began",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  category:
    | "API Testing"
    | "UI Automation"
    | "Performance"
    | "Database"
    | "Security"
    | "Cloud";
  tags: string[];
  stack: string[];
  highlights: string[];
  ciCd: string[];
  architecture?: string[];
  evidence?: string[];
  links?: {
    repo?: string;
    demo?: string;
    ci?: string;
  };
  outcomes: string[];
  date?: string;
  icon: string; // Font Awesome class, e.g. "fa-solid fa-database"
  tint: "blue" | "violet" | "teal" | "rose";
};

export const projectCategories = [
  "API Testing",
  "UI Automation",
  "Performance",
  "Database",
  "Security",
  "Cloud",
] as const;

// Projects will be added progressively as each block of the upskilling plan is completed.
// Block 1 (API Testing Framework) — June 2026
// Block 6 (Playwright Framework)  — August 2026
// Block 8 (Backend REST API)      — September 2026
// Block 13 (Azure CI/CD Pipeline) — November 2026
export const projects: Project[] = [
  {
    slug: "trello-api-test-suite",
    title: "Trello API Test Suite",
    oneLiner:
      "Authenticated API test suite covering a full Trello board lifecycle — create, chain, validate, and teardown — with schema validation, negative testing, and a Newman/Jenkins/Docker pipeline for CI/CD execution.",
    category: "API Testing",
    date: "Jun 2026",
    icon: "fa-solid fa-diagram-project",
    tint: "blue",

    tags: ["API", "Postman", "REST", "CI/CD"],

    stack: [
      "Postman",
      "JavaScript",
      "REST APIs",
      "Jenkins",
      "Docker",
      "GitHub Webhooks",
      "ngrok",
    ],

    highlights: [
      "Full CRUD chain: board → list → card → move → delete",
      "State chaining via environment variables",
      "Dynamic test data generation",
      "Schema validation on nested responses",
      "Negative testing (404 validation)",
      "Idempotent CI-safe execution",
    ],

    ciCd: [
      "GitHub push triggers Jenkins via webhook",
      "Jenkins runs in Docker container",
      "Newman executes Postman collection",
      "HTML report generated per run",
    ],

    architecture: [
      "GitHub repository with Postman collection and environment files",
      "Webhook triggers CI pipeline",
      "Jenkins orchestration layer",
      "Newman execution engine",
      "HTML reporting output",
    ],

    evidence: [
      "Automated Jenkins builds on GitHub push",
      "Newman CLI execution logs",
      "HTML test reports per run",
    ],

    outcomes: [
      "Full API lifecycle covered by a single automated suite",
      "Test execution wired directly into the CI/CD pipeline",
      "Regression issues surface within one build cycle instead of at release",
      "Suite structured the way a real API test project would be, not a one-off script",
    ],

    links: {
      repo: "https://github.com/LeratoDup/trello-api-test-suite",
    },
  },
  // {
  //   slug: "playwright-e2e-framework",
  //   title: "Playwright E2E Framework",
  //   oneLiner:
  //     "End-to-end automation framework built against a live booking platform — Page Object Model architecture, cross-browser parallel execution, and an API-token auth fixture that bypasses UI login for faster, more reliable test setup.",
  //   category: "UI Automation",
  //   date: "Aug 2026",
  //   icon: "fa-solid fa-diagram-project",
  //   tint: "blue",

  //   tags: ["Playwright", "TypeScript", "POM", "CI/CD", "Docker"],

  //   stack: [
  //     "Playwright",
  //     "TypeScript",
  //     "Page Object Model",
  //     "Docker",
  //     "HTML Reporter",
  //     "Trace Viewer",
  //   ],

  //   highlights: [
  //     "Page Object Model architecture for maintainable test structure",
  //     "Cross-browser parallel execution",
  //     "API-token auth fixture bypassing UI login",
  //     "Combined UI + API test flows (seed via API, verify via UI, teardown via API)",
  //     "Visual regression testing",
  //     "Mobile device emulation",
  //   ],

  //   ciCd: [
  //     "Dockerized local test execution for consistent, portable runs",
  //     "Trace Viewer captures for step-by-step failure debugging",
  //     "HTML report generated per run",
  //   ],

  //   architecture: [
  //     "Page Object Model layer separating test logic from UI locators",
  //     "Fixture-based authentication via API token",
  //     "Combined UI + API assertion layer within single test flows",
  //     "Docker container for local, reproducible execution",
  //     "HTML reporting output",
  //   ],

  //   evidence: [
  //     "Cross-browser parallel test run logs",
  //     "Trace Viewer captures per failed run",
  //     "HTML test reports per run",
  //   ],

  //   outcomes: [
  //     "Reusable, maintainable end-to-end automation framework",
  //     "Faster test setup via bypassed UI login",
  //     "Visual regression coverage across UI changes",
  //     "Production-style automation workflow implementation",
  //   ],

  //   links: {
  //     repo: "https://github.com/LeratoDup/trello-api-test-suite",
  //   },
  // },
];
