import slugify from "../lib/slugify";

const projects = [
  {
    id: 1,
    title: "Auto-Audit: Self Healing Data Pipeline",
    description:
      "End-to-end automated pipeline leveraging AI for anomaly detection and data quality checks.",
    about:
      "Auto-Audit was created to solve the recurring issue of broken or inconsistent data pipelines. By combining anomaly detection, self-healing logic, and automated reporting, it reduces downtime and ensures reliable data quality. This project highlights my focus on operational excellence and automation in enterprise data systems.",
    image: "/images/project1.png",
    categories: ["AI"],
    date: "2025-09-15",
    featured: true,
    slug: slugify("Auto-Audit: Self Healing Data Pipeline"),
  },
  {
    id: 2,
    title: "Data Insight Team",
    description:
      "Convert raw data into actionable business insights via AI agents using langGraph to provide raw data to executive insights.",
    about:
      "This project focused on transforming raw enterprise data into executive-ready insights. By leveraging LangGraph AI agents, the team was able to automate the process of summarization, anomaly detection, and dashboard creation — empowering leaders to make decisions faster and with higher confidence.",
    image: "/images/project2.png",
    categories: ["AI"],
    date: "2025-09-20",
    featured: true,
    slug: slugify("Data Insight Team"),
  },
  {
    id: 3,
    title: "Config Companion",
    description:
      "Enable non-engineers to safely generate, review, and manage data pipeline configurations.",
    about:
      "Config Companion bridges the gap between technical teams and business stakeholders. It provides a guided, AI-assisted interface for managing complex data pipeline configurations, ensuring governance, security, and accuracy while empowering non-technical users to participate directly.",
    image: "/images/project3.png",
    categories: ["AI"],
    date: "2025-09-18",
    featured: true,
    slug: slugify("Config Companion"),
  },
  {
    id: 5,
    title: "AI Snowflake Semantic Model",
    description:
      "Build a semantic layer leveraging Snowflake Cortex to make enterprise data AI-ready and enable natural language interactions.",
    about:
      "This project centered on creating a semantic data model for Snowflake using Snowflake Cortex. It involved designing table and column descriptions, classifying sensitive data, and generating synonyms to enable natural language querying. The result was a foundation for AI-driven insights across the enterprise.",
    image: "/images/project5.png",
    categories: ["AI"],
    date: "2025-08-01",
    featured: false,
    slug: slugify("AI Snowflake Semantic Model"),
  },
  {
    id: 6,
    title: "UHGAPP: UnitedHealth Group Archive Privacy App",
    description:
      "Enable a privacy-compliant search engine across 180 TB+ of siloed archive data, ensuring GDPR, HIPAA, and state privacy law compliance.",
    about:
      "UHGAPP was developed to meet strict GDPR and HIPAA requirements for massive archive datasets. It provides privacy-compliant search across 180 TB of data, integrating complex legal and compliance rules into a performant, cloud-based search system.",
    image: "/images/project6.png",
    categories: ["Software Engineering"],
    date: "2025-01-01",
    featured: true,
    slug: slugify("UHGAPP: UnitedHealth Group Archive Privacy App"),
  },
  {
    id: 7,
    title: "EASE Anywhere: Public Cloud Search Application",
    description:
      "Migrate on-prem archive search to the cloud for acquired entities outside the firewall.",
    about:
      "EASE Anywhere provided a flexible, secure search platform in the cloud for acquired entities. It reduced onboarding time for acquisitions and improved scalability while maintaining compliance with data residency and legal standards.",
    image: "/images/project7.png",
    categories: ["Software Engineering", "Cloud"],
    date: "2025-03-01",
    featured: false,
    slug: slugify("EASE Anywhere: Public Cloud Search Application"),
  },
  {
    id: 8,
    title: "EASE: Enterprise Archive Search Engine",
    description:
      "Provide standardized search capabilities across 1 PB of archived data in cold storage for legal and compliance use.",
    about:
      "EASE was designed as a unified search layer across 1 PB of enterprise archive data. It streamlined compliance workflows by giving legal and compliance teams consistent, fast access to data while reducing costs by leveraging cold storage optimization.",
    image: "/images/project8.png",
    categories: ["Software Engineering"],
    date: "2023-06-01",
    featured: false,
    slug: slugify("EASE: Enterprise Archive Search Engine"),
  },
  {
    id: 9,
    title: "SQLite Validation",
    description:
      "Validate archived data adherence to standards at high throughput.",
    about:
      "This project implemented a high-performance validator for archived datasets stored in SQLite. It ensured data adhered to enterprise standards, reduced manual audit overhead, and provided transparency into compliance processes.",
    image: "/images/project9.png",
    categories: ["Software Engineering"],
    date: "2024-04-01",
    featured: false,
    slug: slugify("SQLite Validation"),
  },
  {
    id: 10,
    title: "Anomaly Detection: Claims Processing Outliers",
    description:
      "Identify outliers in claims processing to proactively detect errors.",
    about:
      "Focused on claims processing, this anomaly detection system identified outliers and errors early in the pipeline. It combined supervised and unsupervised ML methods to minimize false positives while catching meaningful anomalies that could indicate fraud or systemic issues.",
    image: "/images/project10.png",
    categories: ["AI"],
    date: "2022-04-01",
    featured: false,
    slug: slugify("Anomaly Detection: Claims Processing Outliers"),
  },
];

export default projects;