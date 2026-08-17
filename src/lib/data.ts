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
  "TypeScript",
  "Postman",
  "Newman",
  "SQL",
  "Jenkins",
  "GitHub Actions",
  "GitHub",
  "Azure DevOps",
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
  screenshots?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  links?: {
    repo?: string;
    demo?: string;
    ci?: string;
  };
  outcomes: string[];
  date?: string;
  icon: string; // Font Awesome class, e.g. "fa-solid fa-database"
  tint: "blue" | "violet" | "teal" | "rose";
  status?: "completed" | "in-progress"; // omit for completed; set "in-progress" while still building it out
};

export const projectCategories = [
  "API Testing",
  "UI Automation",
  "Performance",
  "Database",
  "Security",
  "Cloud",
] as const;

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

    screenshots: [
      {
        src: "/projects/trello/collectionRunner.png",
        alt: "Postman Collection Runner results for the Trello API suite showing 20 of 20 assertions passed across 8 requests with 0 errors",
        caption:
          "Postman Collection Runner: full board lifecycle chain — 20/20 tests passed, 0 errors, ~7.5s run",
      },
      {
        src: "/projects/trello/jenkins.png",
        alt: "Jenkins console output for the Trello API - Newman - Freestyle job, showing a GitHub push triggering the pipeline, repo checkout, and Newman executing the Postman collection",
        caption:
          "Jenkins console output: GitHub push triggers the job, clones the repo, and runs the Postman collection via Newman",
      },
      {
        src: "/projects/trello/newman.png",
        alt: "Newman HTML run dashboard for the Trello API collection showing 9 requests, 20 assertions, 0 failed and 0 skipped tests",
        caption:
          "Newman HTML report generated per Jenkins run: 9 requests, 20 assertions, 0 failed, 0 skipped",
      },
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
  {
    slug: "eventhub-playwright-framework",
    title: "EventHub Playwright Framework",
    oneLiner:
      "End-to-end automation framework built against a live event-booking platform — Page Object Model architecture, fixture composition, and a worker-scoped session fixture that registers an account once per worker instead of per test. Runs locally or on Microsoft Playwright Testing for cloud-scale parallel execution.",
    category: "UI Automation",
    date: "Aug 2026",
    icon: "fa-solid fa-diagram-project",
    tint: "blue",
    status: "in-progress",

    tags: ["Playwright", "TypeScript", "POM", "Azure"],

    stack: [
      "Playwright",
      "TypeScript",
      "Page Object Model",
      "Microsoft Playwright Testing (@azure/playwright)",
      "HTML Reporter",
      "Trace Viewer",
    ],

    highlights: [
      "Page Object Model architecture — one class per screen, plus shared components (nav bar, footer, confirm/delete modal) reused across screens",
      "Cross-browser support — full suite runs across Chromium, Firefox, and WebKit, locally or on a managed cloud browser grid",
      "Worker-scoped auth fixture — one throwaway account registered per worker via a direct API call (no UI round-trip), reused across tests in that worker instead of logging in per test",
      "Fixture composition — page-object fixtures extend the auth fixture, so specs import a single combined test/expect from fixtures/index.ts",
      "Security regression coverage: XSS/SQL-injection-style input verified as neutralized both client-side (no script execution, no DOM injection) and server-side (a direct API login attempt with the payload proves the backend parameterizes the query rather than string-concatenating it)",
      "Test data generated per run (unique emails/passwords/titles) to avoid collisions on a shared public environment",
    ],

    ciCd: [
      "Runs locally via the Playwright test runner (npx playwright test) across Chromium/Firefox/WebKit",
      "Also runs on Microsoft Playwright Testing — a managed cloud browser grid, via playwright.service.config.ts and npm run test:azure, for full cross-browser runs without tying up local resources",
      "Authenticates to Azure via DefaultAzureCredential (az login), with results, artifacts, and traces published to the Playwright Workspaces portal",
      "Test credentials supplied via a local .env file, never committed (kept out of source control via .gitignore)",
      "GitHub Actions is currently disabled while getting familiar with the Azure setup — no workflow is tracked in the repo right now; a prior chromium-on-push/PR workflow existed and reintroducing it (local or via npm run test:azure) is a planned follow-up",
    ],

    architecture: [
      "Page Object Model layer (pages/) plus shared components (pages/components/) separating test logic from UI locators",
      "Worker-scoped auth fixture (auth.fixture.ts) registers a throwaway account via a direct API call; pages.fixture.ts extends it so every page object is built on an authenticated page",
      "Combined test/expect re-exported from fixtures/index.ts as the single import point for specs",
      "playwright.service.config.ts extends playwright.config.ts to run the same suite on Azure instead of locally",
      "Environment-based test config (.env) kept out of source control",
      "HTML reporting output",
      "Full test case plan tracked in tests/TEST_PLAN.md, organized by app section and priority (P0 core / P1 edge cases / P2 polish)",
    ],

    evidence: [
      "Cross-browser test run logs, local and on Azure",
      "Trace Viewer captures per failed run",
      "HTML test reports per run",
      "Azure run: 240 tests, 238 passed / 2 failed / 0 flaky, 19 parallel workers, 4m11s (Playwright Workspaces portal)",
    ],

    screenshots: [
      {
        src: "/projects/eventhub/azure-run2.png",
        alt: "Microsoft Playwright Testing run report showing 240 tests across Chromium and Firefox, 238 passed and 2 failed, with 19 parallel workers",
        caption: "A recent Azure run: 240 tests across Chromium/Firefox",
      },
      {
        src: "/projects/eventhub/azure-run.png",
        alt: "Microsoft Playwright Testing run report showing 240 tests across Chromium and Firefox, 238 passed and 2 failed, with 19 parallel workers",
        caption:
          "238 passed / 2 failed, 19 parallel workers, 4m11s — via the Playwright Workspaces portal",
      },
    ],

    outcomes: [
      "Reusable, maintainable end-to-end automation framework covering auth, auth guards, event listing/details/booking, my bookings, admin event & booking management, and cross-cutting checks (nav, external links, responsive, console errors)",
      "Faster test setup via worker-scoped account reuse (registered via direct API call, not a UI login)",
      "Security-conscious test coverage (XSS/SQLi) validated at both UI and API layers",
      "Flexible execution — same suite runs locally for fast local feedback or on Microsoft Playwright Testing for full cross-browser runs at scale",
      "Verified at scale on Microsoft Playwright Testing — 240 tests across Chromium/Firefox in 4m11s with 19 parallel workers",
      "Remaining gap: a dedicated API-level test suite (test plan section 9) is not yet built — the rest of the test plan, including booking flows and admin CRUD, is already covered",
    ],

    links: {
      repo: "https://github.com/LeratoDup/eventhub-playwrightFramework",
    },
  },
];
