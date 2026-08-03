# Dependency Management

This document explains how Python dependencies are managed in AirPart backend projects.

> This guide covers dependency management only. For initial project installation, see the [Backend Setup](../backend/setup.md) guide.

---

## Tooling

We use [pip-tools](https://github.com/jazzband/pip-tools) to manage Python dependencies in a reproducible way.

The project uses two dependency files:

| File               | Purpose                                                              |
| :----------------- | :------------------------------------------------------------------- |
| `requirements.in`  | Source file for direct dependencies required by the project.         |
| `requirements.txt` | Generated file containing pinned direct and transitive dependencies. |

Both files must be committed to the repository.

---

## Install pip-tools

Install `pip-tools` in your active virtual environment:

```bash
pip install pip-tools
```

---

## Adding a New Dependency

When adding a new package:

1. Activate the project virtual environment.
2. Add the package name to `requirements.in`.

   Example:

   ```text
   flask
   ```

3. Generate the updated `requirements.txt` file:

   ```bash
   pip-compile requirements.in
   ```

4. Review the changes and commit both files:

   ```bash
   git add requirements.in requirements.txt
   git commit -m "chore(deps): add flask dependency"
   ```

---

## Updating Dependencies

To update dependencies to newer compatible versions, run:

```bash
pip-compile --upgrade requirements.in
```

Afterward:

1. Review changes in `requirements.txt`.
2. Test the application and its test suite.
3. Commit both `requirements.in` and `requirements.txt`.

---

## Installing Project Dependencies

To install all pinned dependencies from the generated file:

```bash
pip install -r requirements.txt
```

For full local setup instructions, refer to [Backend Setup](../backend/setup.md).

---

## Team Rules

- Add direct dependencies only to `requirements.in`.
- Do not manually edit `requirements.txt`; it should be generated with `pip-compile`.
- Always commit `requirements.in` and `requirements.txt` together when dependencies change.
- Before merging dependency changes, ensure the application and tests run successfully.
- Avoid adding unused packages to keep the project lightweight and maintainable.
