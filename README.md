# MX Electoral Sections API

Welcome to the Electoral Sections API project! This project is designed to provide a RESTful API for managing electoral section data, built with Express in TypeScript and using PostgreSQL as the database. Below you will find instructions on how to set up and run the project.

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later is recommended)
- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)

## Start developing!

0. Clone the project.

1. **Create a `.env` File**

   Open your terminal and run the following command. This will create a `.env` file with the necessary environment variables:

   ```bash
   cat > .env <<EOF
   NODE_ENV=development
   PORT=8001
   DATABASE_URL=postgresql://alexis:admin123@localhost:5432/secciones_electorales
   DATABASE_LOG=false
   EOF
   ```

2. **Install dependencies**

   Run this command at the root of the folder:

   ```bash
   yarn install
   ```

3. **Prepare your Database**

   Use Docker Compose to start a PostgreSQL container and a pgAdmin container for database management:. Run this command at the root of the folder:

   ```bash
   docker-compose up -d
   ```

4. **Happy hacking!**

   You are ready to start contributing to the project. Run

   ```bash
   yarn dev
   ```
