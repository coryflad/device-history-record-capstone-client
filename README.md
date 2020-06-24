# Device History Record Capstone

A app to track medical device history records

## Working Prototype
You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories / Wireframe





### User Page #1
Provide user a page to record test data
:-------------------------:

![User Page #2 Design](/github-images/screenshots/user-page-1.png)

### User Page #2
Provide user a page to record inspection record keeping
:-------------------------:

![Landing Page Design](/github-images/screenshots/user-page-2.png)

### Defect Log
Provide user a page to record rework and its acceptance activities
:-------------------------:

![Landing Page Design](/github-images/screenshots/defect-log.png)

### User Page #3
Provide user a page to provide the final approved test results
:-------------------------:

![Landing Page Design](/github-images/screenshots/user-page-3.png)



## Screenshots

### Login Page
![Login Page Design](/github-images/screenshots/login.png)

### Landing Page
![Landing Page Design](/github-images/screenshots/landing-page.png)



## Functionality
The app's functionality includes:
* Every User has the ability to create an account

## Business Objects (back-end structure)
* users (database table)
   * email (jsmith@domain.com)
   * password (min 8 chars; one symbol and a capital letter)
   * first_name (Jimmy)
   * last_name (Smith)
* devices (database table)
   * device_id (123456789)
   * device_name (3.0T RF Trap)
   * assembly_no (ABC1234)
   * dmr_no (ABC1234DMR)
   * device_sn (123456789)
   * wo_no (1234)
   * mfg_date (DDMMYYYY)
   * network_analyzer (1234)
   * power_supply (1234)
   * s21_probe (1234)
   * calibration_standard (1234)
* tests (database table)
   * device_id (123456789)
   * db_value_user_entry (-15)
   * db_limit (-10)
   * freq_value (127.72MHz)
   * cap_value (2.4pF)
   * ncm_no (YY-123)
   * approve (true)
   * reject (false)
* defect_log (database table)
   * ncm_no (YY-123)
   * device_sn (123456789)
   * first_name (Jimmy)
   * last_name (Smith)
   * Yes (true)
   * No  (false)
   * user_entry (text)

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