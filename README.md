
# Gitlab Automation

This repository contains an automated test framework built with WebdriverIO and TypeScript. It is designed for UI testing of web applications, ensuring reliability and maintainability in test execution.


## Installation

Prerequisites
Ensure you have the following installed:

```bash
Node.js (>=20.x recommended)
npm
```

Installation
Clone the repository and install dependencies:
```bash
git clone git@github.com:anuragsngh16/gitlab-automation-wdio.git
cd gitlab-automation-wdio
npm install
```
    
## Running Tests

To run tests, run the following command

Run UI tests
```bash
npx wdio run wdio.conf.ts --spec .\test\specs\ui\test.e2e.ts\
```

Run API tests
```bash
npx wdio run wdio.api.conf.ts --spec .\test\specs\apii\apitest.e2e.ts\
```

