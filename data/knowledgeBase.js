// data/knowledgeBase.js
import slugify from "../lib/slugify";

const projects = [
  {
    id: 1,
    title: "Auto-Audit: Self Healing Data Pipeline",
    description:
      "End-to-end automated pipeline leveraging AI for anomaly detection and data quality checks.",
    about:
      "Auto-Audit was created to solve the recurring issue of broken or inconsistent data pipelines. By combining anomaly detection, self-healing logic, and automated reporting, it reduces downtime and ensures reliable data quality. This project highlights my focus on operational excellence and automation in enterprise data systems.",
    challenge: "Data pipelines were breaking frequently due to inconsistent schema changes and data quality issues, causing 20+ hours of manual debugging per week and delayed executive reporting.",
    solution: "Built an autonomous agent system that monitors data entry points. When anomalies are detected, it auto-generates a fix proposal (e.g., schema evolution or data casting) and routes it to a human-in-the-loop for one-click approval.",
    impact: [
      { metric: "90%", label: "Reduction in downtime" },
      { metric: "20hrs", label: "Weekly engineering time saved" },
      { metric: "100%", label: "Data delivery reliability" }
    ],
    techStack: ["Python", "Apache Airflow", "Snowflake", "OpenAI API", "Great Expectations"],
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
    challenge: "Executives were overwhelmed with raw dashboards and CSV exports, leading to decision paralysis. It took analysts 3-4 days to synthesize key insights from quarterly data.",
    solution: "Developed a multi-agent crew using LangGraph. 'Analyst' agents query the database, 'Critic' agents verify the numbers, and 'Storyteller' agents draft the executive summary in natural language.",
    impact: [
      { metric: "4 days → 5 mins", label: "Insight generation time" },
      { metric: "$150k", label: "Projected annual savings" },
      { metric: "4.8/5", label: "Executive satisfaction score" }
    ],
    techStack: ["LangGraph", "LangChain", "Python", "Streamlit", "PostgreSQL"],
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
    challenge: "Non-technical stakeholders relied on engineers for every minor config change, creating a bottleneck. Engineers were spending 30% of their time on JSON/YAML edits.",
    solution: "Created a chat-based interface where users describe their needs in plain English. The AI translates this into validated JSON configs, runs a dry-run test, and opens a PR for review.",
    impact: [
      { metric: "100%", label: "Self-service adoption" },
      { metric: "Zero", label: "Config-related outages" },
      { metric: "30%", label: "Eng capacity reclaimed" }
    ],
    techStack: ["React", "Next.js", "FastAPI", "GitHub API", "OpenAI"],
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
    challenge: "Enterprise data was siloed and poorly documented, making it impossible for LLMs to query it accurately (hallucination rate > 40%).",
    solution: "Implemented a semantic layer using Cortex. Automated the generation of metadata descriptions and relationship mapping. Fine-tuned a text-to-SQL model on domain-specific queries.",
    impact: [
      { metric: "95%", label: "Text-to-SQL accuracy" },
      { metric: "180TB", label: "Data made accessible" },
      { metric: "<2s", label: "Average query latency" }
    ],
    techStack: ["Snowflake Cortex", "dbt", "Python", "SQL", "Streamlit"],
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
    challenge: "Navigating 180TB of legacy archive data to find PII for 'Right to be Forgotten' requests was a manual process taking weeks per request, risking GDPR non-compliance fines.",
    solution: "Built a distributed search engine with automated PII detection. Implemented role-based access control and immutable audit logs to ensure full HIPAA compliance.",
    impact: [
      { metric: "180TB+", label: "Data indexed" },
      { metric: "Weeks → Mins", label: "Search time reduction" },
      { metric: "100%", label: "GDPR/HIPAA compliance" }
    ],
    techStack: ["Elasticsearch", "Java", "Spring Boot", "Azure Blob Storage", "React"],
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
    challenge: "Acquired companies couldn't access the internal on-prem search tool due to firewall restrictions, delaying legal discovery processes by months.",
    solution: "Re-architected the search application for a cloud-native deployment on Azure. Implemented secure federated identity management for external access.",
    impact: [
      { metric: "10x", label: "Faster onboarding" },
      { metric: "$500k", label: "Saved in legal delays" },
      { metric: "Global", label: "Accessibility achieved" }
    ],
    techStack: ["Azure Kubernetes Service", "Docker", "Terraform", "OIDC/OAuth", "Python"],
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
    challenge: "Searching 1PB of cold storage/tape data was cost-prohibitive and slow. Legal teams needed a way to identify relevant documents without restoring everything.",
    solution: "Created a metadata-first search index. Users search metadata instantly and only pay to rehydrate the specific files they need.",
    impact: [
      { metric: "1 PB", label: "Archive managed" },
      { metric: "90%", label: "Storage cost reduction" },
      { metric: "Sub-second", label: "Metadata search speed" }
    ],
    techStack: ["Solr", "Hadoop", "Java", "Linux", "Bash"],
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
    challenge: "Manual validation of thousands of SQLite archive files was impossible, leading to 'silent corruption' where archives were unreadable years later.",
    solution: "Wrote a high-concurrency Rust-based validator that checks structural integrity, schema conformity, and checksums at disk I/O speeds.",
    impact: [
      { metric: "2GB/s", label: "Validation throughput" },
      { metric: "Zero", label: "Corrupt files missed" },
      { metric: "100%", label: "Automated coverage" }
    ],
    techStack: ["Rust", "SQLite", "Tokio", "CI/CD Pipelines"],
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
    challenge: "Fraudulent or erroneous claims were only caught weeks after payment, resulting in difficult 'clawback' processes and financial leakage.",
    solution: "Developed an ensemble model (Isolation Forest + Autoencoders) to score claims in real-time. High-risk claims are flagged for manual review before payment.",
    impact: [
      { metric: "$2M+", label: "Fraud prevented annually" },
      { metric: "<50ms", label: "Inference latency" },
      { metric: "85%", label: "Precision at top 1%" }
    ],
    techStack: ["Python", "Scikit-Learn", "TensorFlow", "FastAPI", "Docker"],
    image: "/images/project10.png",
    categories: ["AI"],
    date: "2022-04-01",
    featured: false,
    slug: slugify("Anomaly Detection: Claims Processing Outliers"),
  },
];

// ✅ Wrap into full knowledge base object
const knowledgeBase = {
  about:
    "Kyle Knudson is a data engineering leader specializing in AI, cloud, and enterprise data systems. He has a track record of building high-performing teams and delivering transformative data platforms.",
  leadership:
    "Kyle has led data engineering teams at scale, focusing on AI/ML integrations, compliance-driven systems, and enterprise modernization. He is passionate about mentoring engineers and enabling organizations to succeed with AI.",
  education:
    "B.S. in Computer Science, with professional certifications in AI, cloud architecture, and leadership.",
  projects, // 🔑 include your full projects array
};

export default knowledgeBase;