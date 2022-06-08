## Description

[Nest](https://github.com/nestjs/nest) Backend for a test application.

## Installation

```bash
$ yarn
```

## Running the app

You need Docker installed and running.

```bash
# Run postgres server
$ yarn db:dev:up

# Generate the database
$ prisma:dev:deploy

```

```bash
# development
$ yarn start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
