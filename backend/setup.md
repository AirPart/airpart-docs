# Backend Setup

This guide explains how to set up the AirPart backend locally for development.

---

## Prerequisites

Before starting, ensure the following are installed:

- **Python 3.10+**
- **Git** configured with SSH access to GitHub
- Python virtual environment support (`venv`)

---

## Clone the Repository

Clone the backend repository using SSH:

```bash
git clone git@github.com:Mohammadhoseinajorloo/aestock-aircraft-port-backend.git
cd aestock-aircraft-port-backend
```

> Update the repository URL if the backend repository is transferred to the `AirPart` GitHub organization.

---

## Create a Virtual Environment

Create an isolated Python environment for the project.

### Linux / macOS

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### Windows

```bash
python -m venv .venv
.venv\Scripts\activate
```

---

## Install Dependencies

With the virtual environment activated, install the required dependencies:

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

For dependency-management rules, see:
[Dependency Management](../development/dependency-management.md).

---

## Configure Local Environment

Create the local environment file from the provided sample:

```bash
cp .test.env.sample .test.env
```

Update the values in `.test.env` according to your local development environment.

For detailed variable descriptions, see:
[Backend Environment Variables](./environment-variables.md).

> Never commit `.test.env` or any file containing secrets to Git.

---

## Run the Backend

Start the application locally:

```bash
./run.sh
```

> If the application entry point changes, update this command in this document.

---

## Run Tests

Execute the backend test suite:

```bash
pytest
```

---

## Enable Code Quality Checks

Install the Git hooks once after cloning the project:

```bash
pre-commit install
```

To run all configured checks manually:

```bash
pre-commit run --all-files
```

For shared coding standards and contribution workflow, refer to the central development documentation.
