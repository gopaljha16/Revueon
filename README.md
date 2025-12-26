<div align="center">
<img width="128" height="128" alt="Revueon Logo" src="utils/icon.png" />
</div>

# Revueon - AI-Powered Code Review Extension

Deep architectural intelligence directly in your editor. Stop writing code that expires in a week.

Revueon doesn't just read code—it understands the long-term impact of every commit. It brings hyper-intelligent code reviews that evolve with your architecture.

## Install Extension

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue?logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=RevueonLabs.revueon)

**Install from VS Code Marketplace:** [Revueon Extension](https://marketplace.visualstudio.com/items?itemName=RevueonLabs.revueon)

Or install via CLI:
```bash
code --install-extension RevueonLabs.revueon
```

## Features

- **Aeon Temporal Memory** - Deep-learning engine that remembers every design decision in your repo. Flags changes that contradict historical team standards or past architectural fixes.

- **Predictive Logic** - Simulates millions of execution paths in real-time to catch race conditions and memory leaks before you hit 'save'.

- **Deep Dependency Scan** - Goes beyond simple version checks. Analyzes how your code actually interacts with 3rd-party libs to find hidden vulnerabilities.

- **Live Sidebar Mentor** - Context-aware chat assistant that lives in your sidebar. Ask anything about your codebase.

- **Architectural Grafting** - Intelligently suggests where new features should live, helping graft new logic into existing patterns without creating technical debt.

- **Security Fortress** - Real-time scanning for secret leaks, PII exposures, and complex SQL injection patterns.

- **Semantic Search Engine** - Search your codebase with concepts, not just keywords. Find code by intent.

- **Refactor Magic** - Instantly modernize legacy code into clean, observable, and testable patterns with one click.

- **Insight Metrics** - Visual dashboards of your codebase's long-term health, complexity trends, and team productivity.

## Quick Start

1. Install the extension from VS Code Marketplace
2. Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
3. Run `Revueon: Connect` to link your workspace
4. Start coding — Revueon begins monitoring and shows smart markers as you type

## Why Revueon?

- Zero-latency background analysis
- Deep architectural drift detection
- Smart context-aware chat
- Security vulnerability shielding
- Understands your business domain, not just syntax

---

## Run Locally (Landing Page)

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
