# Enterprise Angular Nx Monorepo

A scalable Angular monorepo built with Nx to demonstrate enterprise-level frontend architecture, modular domain organization, and maintainable application structure.

## Overview

This project is designed to showcase a modern Angular application organized around business domains rather than a single large codebase. It separates responsibilities into independent modules for products, orders, and shared UI, making the architecture easier to scale as the application grows.

This kind of structure is commonly used in mid-sized and enterprise product teams where multiple features must evolve independently without creating tight coupling across the application.

## Why this project matters

This repository highlights:

- Angular 22 + TypeScript for a modern frontend stack
- Nx monorepo architecture for scalable project organization
- Domain-driven module structure for products and orders
- Lazy-loaded routing to support modular application loading
- Reusable UI components shared across the system
- Testing and quality tooling aligned with enterprise workflows

## Project architecture

The workspace is organized into business-focused areas:

- `src/` — application shell, routing, and shared app-level configuration
- `modules/products/` — product-related domain module
- `modules/orders/` — order-related domain module
- `modules/shared/ui/` — reusable shared interface components
- `e2e/` — end-to-end testing setup with Cypress

This structure reflects a strong emphasis on maintainability, separation of concerns, and long-term scalability.

## Tech stack

- Angular 22
- Nx 24
- TypeScript
- RxJS
- Jest for unit testing
- Cypress for end-to-end testing
- ESLint and Prettier for code quality

## Features

- Modular application layout with domain-based libraries
- Component and route-level organization for better maintainability
- Shared UI layer for repeated presentation elements
- Scalable workspace setup for future expansion
- CI-friendly project structure suitable for enterprise development environments

## Getting started

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npx nx serve
```

Build the project for production:

```bash
npx nx build
```

Run the test suite:

```bash
npx nx test
```

## Professional summary

This project reflects experience with enterprise frontend architecture, modular code organization, and scalable Angular application design. It is a strong example of a portfolio project aimed at roles involving frontend architecture, Angular development, monorepo tooling, and maintainable product engineering.

## Contact

Open to opportunities involving Angular, Nx, frontend architecture, and scalable web application development.
