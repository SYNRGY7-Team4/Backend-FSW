# FSW - LUMI API

# Lumi - Accessibility Banking App

Lumi is a cutting-edge accessibility banking app that breaks down barriers for friends with special needs, such as blind friends. With advanced feature like seamless screen reader integration, Lumi provides a personalized banking experience. Our app is designed to be intuitive and easy to use, empowering users to manage their finances with confidence and independence.

## Table of Contents

- [Overview](#overview)
  - [Links](#links)
  - [Features](#features)
- [The Process](#the-process)
  - [Built with](#built-with)
- [Authors](#authors)

## Overview

### Links

- Live API URL : [lumibank.netlify.app](https://lumibank-api-fsw-edqo6jv53q-et.a.run.app/)
- Live API Documentation in Postman : [LumiBank FSW API Documentation](https://documenter.getpostman.com/view/22135167/2sA3s7ioWc)

### Endpoints

- ### Users

| Endpoint     | Method | Description                                                                               |
| ------------ | ------ | ----------------------------------------------------------------------------------------- |
| `/api/users` | POST   | check whether a user exists in the system based on various types of personal information. |

- ### Account

| Endpoint                                              | Method | Description                                            |
| ----------------------------------------------------- | ------ | ------------------------------------------------------ |
| `/api/account/?accountNumber=<nomor rekening tujuan>` | GET    | Get user bank account data based on the account number |

## The Process

### Built With

- [NodeJS](https://nodejs.org/en) - JavaScript runtime for server-side code
- [ExpressJS](https://expressjs.com/) - Web framework for Node.js
- [JavaScript] - Language for web and server-side development
- [Prisma](https://www.prisma.io/) - Database toolkit and ORM
- [PostgreSQL](https://www.postgresql.org/) - Powerful open-source database
- [Docker](https://www.docker.com/) - Tool for containerizing applications

## Authors

- [Linda Yanti Yo](https://github.com/YYanti00)
