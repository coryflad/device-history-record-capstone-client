# Device History Record Capstone

A app to track medical device history records

## Working Prototype
You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories
This app is for two types of users: a visitor and a logged-in user

#### Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it



### Wireframes
Landing/Login Page
:-------------------------:
![Landing/Login Page](/git-images/wireframes/landing-page-wireframes.png)


## Screenshots
Landing/Login Page
:-------------------------:
![Landing Page](/git-images/screenshots/login-page-screenshot.png)


## Functionality
The app's functionality includes:
* Every User has the ability to create an account

## Business Objects (back-end structure)
* users (database table)
   * email (jthronson@domain.com)
   * password (min 8 chars; one symbol and a capital letter)
   * first name (Johny)
   * last name (Thronson)
* devices (database table)
   * device_id
   * Device Name: 3.0T Balun Assembly
   * Device Number: NC143200
   * DMR #: NC143000
   * Device S/N: 143-4-1001
   * Lot No : 1234
   * Network Analyzer: 123
   * Power Supply: 123
   * S21 Probe: 123
   * Calibration Standard: 123
* tests (database table)
   * test_id
   * device_id
   * decibels_value (127.72MHz)
   * attenuation_value (-21)
   * limit_value

## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

## API Documentation
API Documentation details:
* get all users

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* add more functionality

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test