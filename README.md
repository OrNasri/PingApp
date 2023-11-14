# PingApp-Client

## Overview
PingApp-Client is a React-based web application that allows users to execute ping commands to a specified host and view the results. Additionally, it provides a list of the top pinged sites based on the count.

## Prerequisites
1. Node.js and npm installed
2. PingApp-Server running (see [PingApp-Server README](../PingApp-Server/README.md))

## Installation
1. Clone the repository: `git clone https://github.com/OrNasri/PingApp-Client.git`
2. Change into the project directory: `cd PingApp-Client`
3. Install dependencies: `npm install`

## Configuration
Make sure to set the server port in the `.env` file. Update the `REACT_APP_SERVER_PORT` variable with the appropriate port number.

## Usage
1. Run the application: `npm start`
2. Open your browser and go to `http://localhost:3000`

## Functionality
- Enter the host and the count of ping requests.
- Click the "Run" button to execute the ping command.
- View the output in the "Output" section.
- The "Top Ping Sites" section displays the top pinged sites based on count.

## Reset
- Click the "Reset" button to clear the form fields and output.
