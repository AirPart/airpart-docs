# Git Workflow & Branching Strategy

This document outlines the standard Git workflow and branching strategy for the AirPart organization. All developers are expected to follow these guidelines to maintain a clean project history and smooth integration process.

---

## 1. Branch Strategy

We follow a **Git Flow** variant strategy.

| Branch      | Purpose                                                     | Protection                        |
| :---------- | :---------------------------------------------------------- | :-------------------------------- |
| `main`      | Production-ready code.                                      | Restricted (Direct push disabled) |
| `dev`       | Integration branch for ongoing development.                 | Protected                         |
| `feature/*` | New features or enhancements (e.g., `feature/invoice-api`). | Developer-managed                 |
| `bugfix/*`  | Bug fixes (e.g., `bugfix/invoice-validation`).              | Developer-managed                 |

---

## 2. Development Workflow

Follow these steps for every task/feature:

1. **Synchronize with latest changes:**

   ```bash
   git checkout dev
   git pull origin dev
   ```

2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit changes:**
   Follow the [Commit Message Guidelines](#3-commit-message-guidelines).

4. **Push to remote:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request (PR):**
   Open a PR from your branch to the `dev` branch on GitHub. Ensure the PR description links to the relevant Issue ID.

---

## 3. Commit Message Guidelines

We use **Conventional Commits** to keep our logs readable and automated.

### Format

```text
type(scope): subject

body (optional)
branch: branch-name
Closes: #issue-number
```

### Types

- `feat`: A new feature.
- `fix`: A bug fix.
- `chore`: Routine tasks, dependency updates, build tasks (no code changes).
- `refactor`: Code changes that neither fix a bug nor add a feature.
- `docs`: Changes to documentation.

### Example

```text
feat(invoice): add invoice listing API

Refs: #120260606
```

---

## 4. Pull Request (PR) Policy

- All code MUST be reviewed before merging into `dev`.
- Ensure all CI checks (linting, tests, pre-commit) pass before requesting a review.
- Keep PRs focused on a single feature or fix. If a task is too large, break it down.
