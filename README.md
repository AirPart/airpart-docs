# AirPart Documentation

Central documentation and knowledge base for the AirPart project.

This repository contains shared technical documentation, development standards,
architecture notes, and operational guides for AirPart services.

---

## Repository Structure

```text
docs/
├── backend/            # Backend-specific documentation
├── development/        # Shared development guides and standards
├── architecture/       # System architecture documentation
├── frontend/           # Frontend-specific documentation
├── deployment/         # Deployment guides
├── operations/         # Operations and maintenance guides
└── decisions/          # Architecture Decision Records (ADRs)
```

---

## Available Documentation

### Development

- [Git Workflow](docs/development/git-workflow.md)
- [Dependency Management](docs/development/dependency-management.md)

### Backend

- [Backend Setup](docs/backend/setup.md)
- [Environment Variables](docs/backend/environment-variables.md)

---

## Documentation Principles

- Documentation is maintained as code and reviewed through Pull Requests.
- Keep documentation clear, up to date, and close to the related implementation.
- Do not store secrets, credentials, production URLs, or sensitive operational information in this repository.
- Track tasks, bugs, and feature requests in GitHub Issues and GitHub Projects—not in documentation TODO lists.

---

## Related Repositories

- [AirPart Backend](https://github.com/AirPart/airpart-backend.git)
