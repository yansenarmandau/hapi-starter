# Hapi js Starter

simple boilerplate for building REST API using Hapi

## Setup
```sh
# Copy env
cp .env.example .env

# Install dependencies
npm install
```

## Commands
```sh
# Development mod
npm run dev

# Test
npm run test

# Lint
npm run lint

# Docker
docker build -t hapi-starter .
docker run -p 8080:8080 -d hapi-starter
```
