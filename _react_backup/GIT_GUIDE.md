# AI Git Workflow Guide

This guide is intended for AI assistants and developers to understand how to push code changes to the connected GitHub repository.

## Repository Info
- **Remote URL**: `https://github.com/chemocabs/website.git`
- **Branch**: `main`

## Workflow

### 1. Check Status
Before making changes, check the current status of the repository:
```bash
git status
```

### 2. Stage Changes
Stage all modified and new files:
```bash
git add .
```
*Note: Be careful not to add sensitive files or unnecessary artifacts. The `.gitignore` should handle most of this.*

### 3. Commit Changes
Create a descriptive commit message explaining *what* was changed and *why*:
```bash
git commit -m "Description of changes"
```

### 4. Push to GitHub
Push the changes to the `main` branch:
```bash
git push origin main
```

## Troubleshooting
- If `git push` fails due to remote changes, pull them first:
  ```bash
  git pull origin main
  ```
- If you need to check the remote configuration:
  ```bash
  git remote -v
  ```
