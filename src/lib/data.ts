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
      "Design and maintain scalable low-code automation solutions using Leapwork and ACCELQ across UI, regression, and end-to-end test layers",
      "Apply Page Object Model principles through modular flow design and reusable components to support maintainability and reduce duplication",
      "Implement data driven testing approaches using structured datasets such as JSON and CSV to improve test coverage and flexibility",
      "Align automation coverage with business critical workflows using risk based testing strategies to prioritise high impact areas",
    ],
  },
  {
    title: "API & Backend Testing",
    items: [
      "Design and execute API automation using Postman and Newman",
      "Perform authentication and authorisation testing using OAuth2 and JWT",
      "Implement API-first test data setup and environment preparation strategies",
      //"Maintain API regression suites integrated into CI/CD pipelines",
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
  "Postman",
  "Newman",
  "SQL",
  "Leapwork",
  "ACCELQ",
  "GitHub",
  "Azure DevOps",
  "Jira",
];

export const certifications = [
  "ISTQB Foundation Level — SASTQB",
  "Fundamental Leapwork Automation for Web Applications — Leapwork",
  "ACCELQ Automation Engineer — ACCELQ",
  "Salesforce Certified Administrator — Salesforce",
  "Salesforce Certified Platform App Builder — Salesforce",
  "Salesforce Certified Platform Developer I — Salesforce",
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
  outcomes: string[];
  repoUrl?: string;
  demoUrl?: string;
};

// Projects will be added progressively as each block of the upskilling plan is completed.
// Block 1 (API Testing Framework) — June 2026
// Block 6 (Playwright Framework)  — August 2026
// Block 8 (Backend REST API)      — September 2026
// Block 13 (Azure CI/CD Pipeline) — November 2026
export const projects: Project[] = [];

/*export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
  stack: string[];
  highlights: string[];
  ciCd: string[];
  outcomes: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "playwright-e2e-framework",
    title: "Playwright End-to-End Automation Framework",
    oneLiner:
      "Reusable Playwright and TypeScript framework automating critical user journeys with CI reporting and traceable test data.",
    tags: ["UI", "Playwright", "TypeScript", "CI/CD"],
    stack: [
      "Playwright",
      "TypeScript",
      "Node.js",
      "GitHub Actions",
      "HTML reporting",
      "Screenshots and videos",
    ],
    highlights: [
      "Page Object Model with reusable components",
      "Data-driven tests using JSON and CSV",
      "Critical workflows, login, search, cart, checkout",
      "API-driven test data creation and cleanup",
      "Risk-based grouping for smoke vs regression",
    ],
    ciCd: [
      "Pull request smoke runs",
      "Nightly scheduled regression",
      "Artifacts, HTML report, screenshots, videos",
    ],
    outcomes: [
      "Faster feedback on business critical flows",
      "Consistent regression execution in CI",
      "Traceable results per pipeline run",
    ],
    repoUrl: "https://github.com/yourname/playwright-e2e-framework",
  },
  {
    slug: "api-automation-ci",
    title: "API Automation and CI/CD Pipeline",
    oneLiner:
      "Comprehensive API regression built in Postman and executed in CI via Newman with auth coverage and clear pass fail reporting.",
    tags: ["API", "Postman", "Newman", "CI/CD"],
    stack: [
      "Postman",
      "Newman",
      "OAuth2",
      "JWT",
      "GitHub Actions or Azure DevOps",
    ],
    highlights: [
      "Collections organised by domain and endpoint",
      "Environment strategy for dev, test, staging",
      "OAuth2 token acquisition patterns",
      "Data-driven tests across datasets",
      "Setup and teardown for clean runs",
    ],
    ciCd: [
      "Newman runs with reports",
      "Pipeline gating on regressions",
      "Scheduled suite for early warning",
    ],
    outcomes: [
      "Reliable service validation without UI dependency",
      "Improved confidence in releases and integrations",
    ],
    repoUrl: "https://github.com/yourname/api-automation-ci",
  },
  {
    slug: "azure-functions-testing",
    title: "Azure Serverless API plus Test Automation",
    oneLiner:
      "Built and tested an Azure Functions REST API, secured endpoints with OAuth2, validated through API tests and SQL checks, deployed with YAML pipelines.",
    tags: ["Azure", "Serverless", "API", "SQL", "CI/CD"],
    stack: [
      "Azure Functions",
      "Azure DevOps YAML",
      "Postman",
      "Newman",
      "SQL",
      "OAuth2",
    ],
    highlights: [
      "Serverless endpoints with clear contracts",
      "Secure configuration per environment",
      "API regression suite plus SQL validations",
      "Pipeline stages for build, deploy, test",
    ],
    ciCd: [
      "Multi-stage YAML pipeline",
      "Post-deploy tests",
      "Artifacts for reporting",
    ],
    outcomes: [
      "Cloud-native quality gates",
      "End-to-end confidence from API to database",
    ],
    repoUrl: "https://github.com/yourname/azure-functions-testing",
  },
  {
    slug: "leapwork-automation",
    title: "Leapwork Advanced Automation",
    oneLiner:
      "Modular Leapwork components integrated into Azure DevOps for scheduled runs with monitoring and reporting.",
    tags: ["Leapwork", "Azure DevOps", "Regression Ops"],
    stack: ["Leapwork", "Azure DevOps", "Scheduled pipelines", "Reporting"],
    highlights: [
      "Reusable business components as modular flows",
      "Nightly scheduled runs",
      "Reporting and monitoring hooks",
    ],
    ciCd: ["Scheduled runs", "Pipeline reporting", "Basic monitoring"],
    outcomes: [
      "Improved regression operations and repeatability",
      "Reusable components for faster automation delivery",
    ],
  },
*/
