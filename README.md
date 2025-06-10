# Simple Backend Product CRUD Operations Project

## Table of Contents
- [Description](#description)
- [Installation and Setup Instructions](#installation-and-setup-instructions)
  - [Setup Environment and Tools](#setup-environment-and-tools)
  - [Setup Project](#setup-project)
  - [Set Up env File](#set-up-env-file)
  - [Run Project](#run-project)
  - [Setup Postmen for testing](#setup-postmen-for-testing)
  - [Testing](#testing)


## Description
- Creating simple backend product CURD operations for future technologies assignment

## Installation and Setup Instructions
### Setup Environment and Tools
- Download and Install the [Node.js](https://nodejs.org/en/download/package-manager/current)
- Download and Install the [Git Bash](https://git-scm.com/downloads)
- Run the following command on the command line for download and install NPM `npm install -g npm`

### Setup Project
- Create the folder where you like
- Copy the HTTPS or if you use SSH key use SSH code in [simple-backend-product-crud-operations](https://github.com/HALLakmina/simple-backend-product-crud-operations) inside **<> CODE** dropdown button
- Open the Git Bash inside when you create folder and type following command wit HTTPS or SSH CODE for download project `git clone after past HTTPS or SSH CODE`
- Go inside the project folder and open the new Git Bash inside project folder and type following command
  - `git fetch` to see every changes
  - `git branch` to check you are in main branch
  - `git pull` to download the content from remote repository
  - `npm install` to install the all dependence

### Set Up env File
- copy .env-example file and paste it in root directory. Rename it to ".env"

### Run Project
- Open [Visual Studio Code](https://code.visualstudio.com/) or other code editor tool inside the project folder
- Then open code editor **Terminal** or **git bash** type following command for run project
  - `nodemon` to run Express server
    - Runs the app in the development mode.
    - Open [http://localhost:6000](http://localhost:6000) to view it in your browser.

### Setup Postmen for testing
- Postman installed on your computer
- Import postmen collection in side the postmen_collection folder to your Postmen app
- set postmen env variable `production_URL` => [http://localhost:6000/api/v1](http://localhost:6000)

### Testing
- You can test each endpoint one by one using postmen collection, and you can review the code also