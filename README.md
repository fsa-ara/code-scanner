# code-scanner

CodeScanner is a lightweight JavaScript component that provides barcode directly in the browser using the phone camera. It includes a scanning area, visual feedback states, and a simple event-based API.

## Table of contents

- [Purpose](#purpose)
- [Status](#status)
- [Installation](#installation)
- [Documentations](docs/index.md)

## Purpose

The goal of this project is to provide a reusable and framework-agnostic scanner component that can be easily integrated into web applications.

## Status

[![node][node]][node-url]
[![javascript][javascript]][javascript-url]
[![license][license]][license-url]

## Installation

### Clone the repo

```bash
git clone https://github.com/fsa-ara/code-scanner.git
```

### Generate HTTPS certificates

WARNING: Requires mkcert and nss (for Firefox) to be installed.

```bash
brew install mkcert nss
```

```bash
npm run make:certs
```

### Install dependencies

```bash
npm install
```

### Development mode

```bash
npm run dev
```

### Mobile access

`https://<ip_address>:<vite_port>/`

ex: `https://192.000.0.1:5173/`

[node]: https://img.shields.io/badge/Node-v24.x-66cc33
[node-url]: https://nodejs.org/en
[javascript]: https://img.shields.io/badge/Javascript-ES6-F0DB4F.svg
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[license]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
