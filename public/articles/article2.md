
Data Pipeline Management
Data pipelines are the backbone of modern analytics, but creating and managing them is often reserved for specialized engineers. Writing YAML configs, setting schedules, and avoiding table conflicts can be intimidating for non-technical team members.
I built an AI-powered Data Pipeline Config Governance Assistant to make pipeline configuration accessible to everyone — even those without deep data engineering expertise. In this article, I’ll show how it works and how it empowers non-technical users to confidently create and manage pipeline jobs.
The Challenge
Traditionally, creating a pipeline config requires:
Knowledge of YAML or similar config types
Understanding of schedules and cron expressions
Awareness of data sources, destinations, and parameters
Vigilance against conflicts with existing jobs
For business analysts, product managers, or junior engineers, this process can be overwhelming. Mistakes can break pipelines, delay analytics, or corrupt data.
The AI-Powered Solution
Our assistant leverages large language models (LLMs) to handle technical complexity, while letting non-data engineers focus on describing the job in plain language.
Describe the job in natural language
Example: “Ingest the weekly sales report from our API into the analytics database.”
Press enter or click to view image in full size

Users can explain the configuration they want to build in natural language
AI generates a correctly formatted YAML config
Fields, schedules, and parameters are automatically populated.
Press enter or click to view image in full size

Previously created configs that are related to the prompt are brought back for reference
Press enter or click to view image in full size

Config is generated from the natural language prompt from the user
Conflict detection
The system checks for overlapping schedules or duplicate tables and warns the user.
Press enter or click to view image in full size

Conflicts are identified if multiple jobs are feeding into a table on the same schedule
Governance scoring
Each config receives a score that highlights potential optimizations or issues.
Press enter or click to view image in full size

Governance Analysis is completed to suggest changes and score out the config
Standardized YAML Schema
To ensure consistency and reduce errors, we provide a predefined schema:
job_name: weekly_sales_ingest
description: “Ingest weekly sales data from API”
source:
type: api
connection_string: “<api_endpoint>”
destination:
type: database
table: sales_weekly
schedule: “0 6 * * MON”
parameters:
retries: 3
batch_size: 100
The AI generates configs in this exact format every time, guiding non-engineers to produce production-ready YAML.
Empowering Users
Benefits for non-technical team members:
Confidence: Automated checks catch conflicts before reaching production.
Efficiency: Generate configs in seconds instead of wrestling with YAML.
Collaboration: Everyone can contribute to pipeline setup, not just engineers.
Audibility: Versioned configs and governance scores provide transparency.
Lessons Learned
Clear prompts matter: The LLM needs a strict schema for reliable outputs otherwise there will be wildly different configs that are being created.
Conflict detection is crucial: Users need actionable guidance if their job overlaps with existing pipelines to minimize the amount of knowledge a non-technical user would need to bring to this solution.
UI simplicity matters: Easy approval/reject buttons and readable scores make it approachable.
Next Steps
Future improvements could include:
Enhanced AI guidance for dynamic suggestions and optimizations.
Altering this to be more generic and easier to adapt to any data management pipeline.
Conclusion
AI can democratize data engineering. By handling technical details and enforcing governance, non-technical team members can confidently create, review, and manage pipeline configs.
With the right tools, data workflows don’t have to be the sole responsibility of engineers — they can be collaborative, safe, and accessible to entire enterprises.
Github Repo: Config Companion: https://github.com/kknudson15/Agentic_AI/tree/main/Config_Companion
To run the app run:
UV run Streamlit run app.py and ensure that your open_ai key is in your .env file.