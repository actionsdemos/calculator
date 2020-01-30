This is a demo node.js application with multiple CI/CD workflow
definitions.  There are three workflows:

1. [CI / PR validation build](#ci--pr-validation-build)
2. [Deploy to Azure Web App](#deploy-to-azure-web-app)
3. [Deploy container to GitHub Packages](#deploy-container-to-github-packages)

## CI / PR validation build

[Download YAML](ci.yml)

This is similar to the [node.js starter workflow](https://github.com/actions/starter-workflows/blob/master/ci/node.js.yml).  It has been modified to perform CI builds only on the master branch, and to include pull request validation for PRs opened against the master branch.

```yaml
name: Node CI

on:
  push:
    branches:
     - master
  pull_request:
    branches:
     - master

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [8.x, 10.x, 12.x]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: actions/setup-node@v1
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
    - name: npm install, build, and test
      run: |
        npm ci
        npm run build --if-present
        npm test
      env:
        CI: true
```

## Deploy to Azure Web App

[Download YAML](azure-deploy.yml)

This will deploy to an Azure Web App when a new release is created on
github.com.

Create an Azure Web App that uses node.js 12.  Set up a variable for the
Web App, PORT=8080.

In the repository settings, create a secret using the publish profile
from the Azure Portal.

```yaml
name: Deploy to Azure

on:
  release:
    types: [created]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: 'Checkout' 
      uses: actions/checkout@master
    
    - name: Setup Node 12.x
      uses: actions/setup-node@v1
      with:
        node-version: '12.x'

    - name: 'Build and Test'
      run: |
        npm install
        npm run build --if-present
        npm run test --if-present
       
    - name: 'Deploy Azure Web App'
      uses: azure/webapps-deploy@v1
      with: 
        app-name: calcjs
        publish-profile: {% raw %}${{ secrets.AZURE_PUBLISH_PROFILE }}{% endraw %}
```

## Deploy container to GitHub Packages

[Download YAML](gpr.yml)

This will build a docker container that contains the node.js application,
and deploy that container to GitHub Packages (tagged with the current
time in Unix format).

```yaml
name: Docker

on:
  release:
    types:
    - created    

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js 12.x
      uses: actions/setup-node@v1
      with:
        node-version: 12.x
    - name: package docker
      run: |
        VERSION=$(date +%s)
        docker login docker.pkg.github.com --username ethomson --password {% raw %}${{ secrets.PACKAGE_PAT }}{% endraw %}
        docker build . --file Dockerfile --tag docker.pkg.github.com/ethomson/calculator/app:${VERSION}
        docker push docker.pkg.github.com/ethomson/calculator/app:${VERSION}
      env:
        CI: true
```
