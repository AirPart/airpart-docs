---
title: Environment variables
description: List of all environment variables, secrets, and configuration required for the backend
---

# Backend Environment Variables

This document serves as the central reference for all environment configuration required by the AirPart backend service.

---

## Overview

The application uses environment variables to manage configuration (such as database URLs and file paths) that differ between development, testing, and production environments.

## Setup Instructions

To configure your local environment:

1. **Copy the sample file**:

   ```bash
   cp .test.env.sample .test.env
   ```

2. **Edit the file**: Open `.test.env` and update the values to match your local machine's setup.

---

## Configuration Reference

| Variable           | Description                                                  | Type   | Example            |
| :----------------- | :----------------------------------------------------------- | :----- | :----------------- |
| `DB_ADDRESS`       | Connection string used by SQLAlchemy to access the database. | String | `sqlite:///app.db` |
| `DB_PRODUCT_IMAGE` | Directory path where product images are uploaded/stored.     | Path   | `./storage/images` |
| `DB_PRODUCT_DOCS`  | Directory path where product documentation files are stored. | Path   | `./storage/docs`   |

---

## Security Guidelines

- **Never commit secrets**: Do not commit your actual `.test.env` or any `.env` files to Git. They contain sensitive information that should not be shared in the repository.
- **Maintain the sample**: If you add a new configuration variable to the application, **always** update the `.test.env.sample` file with a placeholder value. This ensures other developers know they need to configure this new variable.
- **Validation**: Ensure that all paths defined in `DB_PRODUCT_IMAGE` and `DB_PRODUCT_DOCS` exist on your local filesystem before running the application.
