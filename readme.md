# COMM.TUBE-API

# Getting started
- Clone the repository
```
git clone  https://github.com/mathvp/comm.tube-api.git
```
- Install dependencies
```
cd comm.tube-api
npm install
```
- Build and run the project
```
npm run dev
```
  Navigate to `http://localhost:8080`


# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|DB_HOST           | Postgres DB url            | localhost      |
|DB_USER           | Postgres DB user            | postgres      |
|DB_PASS           | Postgres DB password            | postgres      |
|DB_NAME           | Postgres DB name            | postgres      |
|JWT_SECRET        | JWT Random String to use in salt | -------


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 15.6.0
