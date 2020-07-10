# Device History Record Capstone

A app to track medical device history records

## Working Prototype
You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories / Wireframe

### Login Page
Provide user a page login
:-------------------------:

![Login Page](/github-images/wireframes/login.png)

### Landing Page
Provide user a landing page
:-------------------------:

![Login Page](/github-images/wireframes/landing.png)

### User Page #1
Provide user a page to record test data
:-------------------------:

![User Page #2 Design](/github-images/wireframes/user-page-1.png)

### User Page #2
Provide user a page to record inspection record keeping
:-------------------------:

![Landing Page Design](/github-images/wireframes/user-page-2.png)

### Defect Log
Provide user a page to record rework and its acceptance activities
:-------------------------:

![Landing Page Design](/github-images/wireframes/defect-log.png)

### User Page #3
Provide user a page to provide the final approved test results
:-------------------------:

![Landing Page Design](/github-images/wireframes/user-page-3.png)



## Screenshots

### Login Page
![Login Page Design](/github-images/screenshots/login.png)

### Landing Page
![Landing Page Design](/github-images/screenshots/landing-page.png)



## Functionality
The app's functionality includes:
* Every User has the ability to create an account
* Provide user with the ability to record the build history of a medical device assembly


## Business Objects (back-end structure)
* users (database table)
   * id (auto-generated)
   * email (example: jsmith@domain.com; validation: email validation)
   * password (validation: min 8 chars; one symbol and a capital letter)
   * first_name (example: Jimmy; validation: varchar 255 characters )
   * last_name (example: Smith; validation: varchar 255 characters)
* devices (database table)
   * id (auto-generated)
   * device_id (example: 123456789; validation: integer 255 )
   * device_name (example: 3.0T RF Trap; validation: varchar 255 characters )
   * assembly_no (example: ABC1234; validation: varchar 255 characters )
   * dmr_no (example: ABC1234DMR; validation: varchar 255 characters )
   * device_sn (example: 123456789; validation: integer 255 )
   * wo_no (example: 1234; validation: integer 255 )
   * mfg_date (example: DDMMYYYY; validation: integer 255 )
   * network_analyzer (example: 1234; validation: integer 255 )
   * power_supply (example: 1234; validation: integer 255 )
   * s21_probe (example: 1234; validation: integer 255 )
   * calibration_standard (example: 1234; validation: integer 255 )
* tests (database table)
   * id (auto-generated)
   * device_id (example: 123456789; validation: integer 255 )
   * db_value_user_entry (example: -15; validation: varchar 255 characters )
   * db_limit (example: -10; validation: varchar 255 characters )
   * freq_value (example: 127.72MHz; validation: varchar 255 characters )
   * cap_value (example: 2.4pF; validation: varchar 255 characters )
   * ncm_no (example: YY-123; validation: varchar 255 characters )
   * qa_approval (example: true; validation: boolean integer )
* defect_log (database table)
   * id (auto-generated)
   * ncm_no (example: 12-123; validation: varchar 255 characters  )
   * device_sn (example: 123456789; validation: integer 255 )
   * first_name (example: Jimmy; validation: varchar 255 characters  )
   * last_name (example: Smith; validation: varchar 255 characters  )
   * qa_approval (example: true; validation: boolean integer )
   * user_entry (example: text; validation: varchar 255 characters )

## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

## API Documentation
API Documentation details:
* Get all users

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Provide a way to print the Device History Record to .pdf, or to paper
* Add the ability to use a bar code reader for data entry
* Add the ability to upload photos of product ID labels
* Provide validation for pass/fail criteria

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