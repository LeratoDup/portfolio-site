export const person = {
  name: "LERATO DU PLESSIS",
  title: "Test Engineer II",
  tagline:
    "Test Engineer transitioning into SDET & Cloud | API, Automation & Manual Testing | ISTQB Certified",
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
  items: string[];
}> = [
  {
    title: "Manual & Functional Testing",
    items: [
      "Design and execute structured test coverage across functional, regression, integration, and end-to-end layers",
      "Translate complex business and technical requirements into clear, testable scenarios",
      "Apply exploratory and risk based techniques to optimise coverage and surface high impact issues early",
      "Manage the full defect lifecycle — triage, escalation, resolution, and closure",
      "Support UAT and release readiness, providing clear insights into product quality",
    ],
  },
  {
    title: "Automation & Quality Engineering",
    items: [
      "Design and maintain scalable Playwright automation frameworks across UI, regression, and end-to-end test layers",
      "Apply Page Object Model principles through modular component design and reusable fixtures to support maintainability and reduce duplication",
      "Implement data driven testing approaches using structured datasets such as JSON and CSV to improve test coverage and flexibility",
      "Align automation coverage with business critical workflows using risk based testing strategies to prioritise high impact areas",
    ],
  },
  {
    title: "API & Backend Testing",
    items: [
      "Design and execute API test suites using Postman and Newman, covering full request lifecycle validation across GET, POST, PUT, and DELETE operations",
      "Implement API key and token-based authentication flows to validate secure access patterns",
      "Build data driven test scenarios using CSV and JSON datasets to improve coverage and validate behaviour across multiple input conditions",
      "Integrate API test suites into CI pipelines using Newman, enabling automated regression execution on every build",
    ],
  },
  {
    title: "Database Testing",
    items: [
      "Validate backend systems using SQL — CRUD operations, joins, aggregations, and transactions",
      "Ensure data integrity and consistency across systems and environments",
      "Perform cross layer validation spanning UI, API, and database",
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
  attachment: string | null;
};

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals - AZ-900",
    attachment: "/certs/Az-900.pdf", // e.g. "https://learn.microsoft.com/api/credentials/share/en-us/..."
  },
  {
    name: "ISTQB Foundation Level",
    attachment: "/certs/sastqb_Lerato Du Plessis_CTFL.png",
  },
  {
    name: "Fundamental Leapwork Automation for Web Applications",
    attachment: "certs/Leapwork web fundamental.pdf",
  },
  {
    name: "ACCELQ Automation Engineer",
    attachment: "/certs/Accelq automation engineer.pdf",
  },
  {
    name: "Salesforce Certified Administrator",
    attachment: "/certs/Salesforce Administrator.pdf",
  },
  {
    name: "Salesforce Certified Platform App Builder",
    attachment: "/certs/Salesforce platform app builder .pdf",
  },
  {
    name: "Salesforce Certified Platform Developer I",
    attachment: "/certs/Salesforce platform developer 1.pdf",
  },
  {
    name:" Postman: The Complete Guide - REST API Testing",
    attachment:"/certs/Postman api testing.pdf",
  },
  
];

export const experience = [
  {
    company: "LINKITSYSTEMS",
    role: "Test Engineer II",
    dates: "Apr 2025 to Present",
    bullets: [
      "Designed, executed, and maintained manual and automated test suites for functional, regression, and integration testing of business-critical systems",
      "Authored comprehensive test plans outlining scope, strategy, environments, timelines, and risks",
      "Performed API testing and validation to ensure service reliability, correct request/response handling, and accurate backend behaviour",
      "Collaborated with cross-functional Agile teams, participating in sprint planning, standups, reviews, and defect triage",
      "Logged, tracked, and verified defects through to resolution, contributing to improved product stability",
      "Contributed to quality risk discussions, ensuring coverage aligned with business priorities",
    ],
  },
  {
    company: "DELOITTE",
    role: "Analyst",
    dates: "Mar 2023 to Mar 2025",
    bullets: [
      "Designed and executed manual and automated test cases for functional, regression, and integration testing across enterprise Salesforce platforms",
      "Built and executed API test suites using Postman to validate CRUD operations, authentication flows, and data consistency",
      "Worked in Agile Scrum teams, collaborating with developers, business analysts, and product owners",
      "Managed defect lifecycle using Jira, including logging, prioritisation, retesting, and closure",
      "Analysed business requirements and translated them into clear test scenarios and execution plans",
      "Produced detailed test documentation and reports to support release readiness",
    ],
  },
  {
    company: "DELOITTE",
    role: "Junior Analyst — InfinityX Graduate Programme",
    dates: "Jan 2022 to Mar 2023",
    bullets: [
      "Executed predefined manual test cases and identified functional and data-related defects",
      "Logged and tracked defects using standard defect management tools",
      "Maintained test documentation and supported requirements reviews",
      "Built foundational experience in the software testing lifecycle, Agile delivery, and consulting best practices",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
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
};

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
      "Authenticated API test suite covering a full Trello board lifecycle — create, chain, validate, and teardown — built in Postman with CI/CD automation readiness.",

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
      "GitHub as source of truth",
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
      "End-to-end automated API validation system",
      "CI/CD pipeline integrated with test execution",
      "Real-time regression feedback loop",
      "Production-style QA workflow implementation",
    ],

    links: {
      repo: "https://github.com/LeratoDup/trello-api-test-suite",
    },
  },
];