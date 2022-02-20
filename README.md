Calculator.js: a node.js Demonstration Project
==============================================
An example node.js project, including tests with mocha, that behaves like
a pocket calculator.
[![Build Status](https://dev.azure.com/yuyuhlaing/ICTTI%20(Agile%20Planning%20and%20Portfolio%20Mgmt%20with%20Azure%20Boards)/_apis/build/status/yyuhlaing.calculator?branchName=refs%2Fpull%2F2%2Fmerge)](https://dev.azure.com/yuyuhlaing/ICTTI%20(Agile%20Planning%20and%20Portfolio%20Mgmt%20with%20Azure%20Boards)/_build/latest?definitionId=21&branchName=refs%2Fpull%2F2%2Fmerge)
The project contains a simple node.js application that exposes REST APIs
to perform arithmetic on integers, and provides a test suite with mocha
and chai.  The `mocha-junit-reporters` package is included to provide XML
output that can be presented in a continuous integration tool like
[Azure DevOps](https://azure.com/devops).

To build, simply:

1. Runs `npm install` to install dependencies.
2. Runs `npm test` to run Mocha and execute the unit tests.

