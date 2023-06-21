Calculator.js: a node.js Demonstration Project
==============================================

[![Board Status](https://dev.azure.com/nicovt/4e5ee35d-0a1d-4627-aad3-24ceeafbc4b6/caca062f-3d3a-41c9-aa1c-eded6d9c5c49/_apis/work/boardbadge/eef7a2f2-d573-4e06-a536-10bb4cce6570)](https://dev.azure.com/nicovt/4e5ee35d-0a1d-4627-aad3-24ceeafbc4b6/_boards/board/t/caca062f-3d3a-41c9-aa1c-eded6d9c5c49/Microsoft.RequirementCategory)

An example node.js project, including tests with mocha, that behaves like
a pocket calculator.

[![Build Status](https://dev.azure.com/nicovt/mygitlabproject/_apis/build/status%2Fnvantonder.calculator?branchName=master)](https://dev.azure.com/nicovt/mygitlabproject/_build/latest?definitionId=6&branchName=master)

The project contains a simple node.js application that exposes REST APIs
to perform arithmetic on integers, and provides a test suite with mocha
and chai.  The `mocha-junit-reporters` package is included to provide XML
output that can be presented in a continuous integration tool like
[Azure DevOps](https://azure.com/devops).

To build, simply:

1. Runs `npm install` to install dependencies.
2. Runs `npm test` to run Mocha and execute the unit tests.

