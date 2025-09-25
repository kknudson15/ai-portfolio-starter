How I Built a Self-Healing Data Audit Pipeline with AI Agents

by Kyle Knudson

Data is the lifeblood of modern enterprises, but keeping it clean, reliable, and actionable is no easy task. Analysts and data engineers often spend hours writing tests, checking for missing values, duplicates, or outliers, and manually fixing broken pipelines.

What if your pipeline could detect and fix issues automatically, while generating a human-readable audit report? That’s the idea behind Auto-Audit, a self-healing data quality pipeline powered by multi-agent AI and OpenAI’s language models.

The Problem

Even with sophisticated dashboards, enterprises often face:
	•	Data drift: datasets evolve over time, breaking downstream reports.
	•	Manual QA burden: engineers must write and maintain countless tests.
	•	Slow insights: analysts spend more time debugging data than drawing insights.

Traditional ETL pipelines are deterministic, but they don’t adapt to unexpected data issues, and testing often lags behind data changes. Auto-Audit addresses this gap by using AI agents that collaborate asynchronously to detect, remediate, and report on data quality.

Solution Overview

Auto-Audit consists of four agents, each with a distinct role:
	1.	Scanner Agent: Profiles datasets and identifies potential issues like nulls, duplicates, or outliers.
	2.	Rule Agent: Generates quality checks in SQL or Python based on the scanned data.
	3.	Fix Agent: Suggests remediation code to correct identified problems.
	4.	Reporter Agent: Produces a human-friendly audit report, summarizing issues and fixes.

These agents communicate via MCP-style channels (multi-channel protocol), allowing them to operate asynchronously while passing messages between each other. The Flask app triggers the pipeline and displays the results, but the agents themselves are decoupled, making the architecture scalable and modular.

Technical Implementation
	•	Backend: Python, Flask
	•	Frontend: Tailwind CSS (dark-themed, interactive dashboard)
	•	Data: SQLite / Snowflake (session-only demo)
	•	AI: OpenAI GPT-4 via OpenAI Python SDK
	•	Asynchronous orchestration: asyncio + in-memory queues

MCP-Oriented Agents

The agents communicate using asyncio.Queue objects, effectively functioning as channels:

scan_channel = asyncio.Queue()
rules_channel = asyncio.Queue()
fix_channel = asyncio.Queue()
report_channel = asyncio.Queue()

Each agent:
	•	Reads from its input channel
	•	Processes the data using OpenAI API
	•	Writes results to its output channel

This creates a pipeline where agents are decoupled, but still synchronized through message passing.

Example: Scanner Agent

async def scanner_agent(data_preview):
    prompt = f"""
    You are a data quality scanner. Identify potential issues like missing values, duplicates, or outliers:
    {data_preview}
    """
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    await scan_channel.put(response.choices[0].message.content)

Other agents follow similar patterns, generating rules, fixes, and the final report.

Demonstration

When you launch the app, you are presented with a simple UI that allows the user to upload a CSV file and select a database to work with.

After uploading the file, clicking the “Generate Audit Report” button kicks off the agent workflows.

Once the agents complete their work, the user is redirected to a separate page that first shows an audit report outlining all of the potential issues in the data.

The original data and potentially fixed data are then shown to see how suggested changes would look.

The actual code-suggested fixes are then provided for the user to implement on their own if desired.

At the bottom of the page, the user can choose to apply the fixes in production, which will take the suggestions and make the updates. All audits are stored in the database for future reference.

The pipeline demonstrates self-healing behavior: agents detect issues, generate remediation code, and summarize everything in a clear report — all automatically.

⸻

For more details and the full implementation, you can read the original article on Medium: How I Built a Self-Healing Data Audit Pipeline with AI Agents