# Device History Record Capstone

A app to track medical device history records

## Working Prototype
You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories / Wireframe

### Login Page / Landing Page - Buisness Objects
Provide user a page login
:-------------------------:

![Login Page](/github-images/wireframes/login-landing.png)


### Device History Record - Buisness Objects
Provide user a page to record test data
:-------------------------:

![Device History Record - (buisness objects)](/github-images/wireframes/device-history-buisness-objects.png)


### Device History Record - Sample View
Provide user a page to record test data
:-------------------------:

![Device History Record - (sample view)](/github-images/wireframes/device-history-sample.png)



### Defect Log - Buisness Objects
Provide user a page to record rework and its acceptance activities
:-------------------------:

![Defect Log - (buisness objects)](/github-images/wireframes/defect-log-buisness-objects.png)



### Defect Log - Sample View
Provide user a page to record rework and its acceptance activities
:-------------------------:

![Defect Log - (buisness objects)](/github-images/wireframes/defect-log-sample.png)


## Screenshots

### Login Page
![Login Page Design](/github-images/screenshots/login.png)

### Landing Page
![Landing Page Design](/github-images/screenshots/landing-page.png)



## Functionality
The app's functionality includes:
* Every User has the ability to create an account
* Provide user with the ability to record the build history of a medical device assembly


## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

## Front-end Structure - React Components Map
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -


## Backend Structure - Business Objects
* users (database table)
   * id (auto-generated)
   * username (example: jsmith; validation: email validation)
   * password (validation: min 8 chars; one symbol and a capital letter)
   * first_name (example: Jimmy; validation: varchar 255 characters )
   * last_name (example: Smith; validation: varchar 255 characters)
* devices (database table)
   * id (auto-generated)
   * device_id (example: 123456789; validation: integer 255 )
   * device_name (example: 3.0T RF Trap; validation: varchar 255 characters )
   * assembly_no (example: 3.0T-124801; validation: varchar 255 characters )
   * dmr_no (example: 3.0T-124DMR; validation: varchar 255 characters )
   * device_sn (example: 20206589; validation: integer 255 )
   * wo_no (example: 4578; validation: integer 255 )
   * todays_date (example: 27-04-2020; validation: integer 255 )
   * network_analyzer (example: 2789; validation: integer 255 )
   * power_supply (example: 1007; validation: integer 255 )
   * s21_probe (example: 0078; validation: integer 255 )
   * calibration_standard (example: 0003; validation: integer 255 )
* tests (database table)11
   * id (auto-generated)
   * device_id (example: 123456789; validation: integer 255 )
   * db_value_user_entry (example: -15; validation: varchar 255 characters )
   * db_limit (example: -10; validation: varchar 255 characters )
   * freq_value (example: 127.72MHz; validation: varchar 255 characters )
   * cap_value (example: 2.4pF; validation: varchar 255 characters )
   * ncm_no (example: 20-123; validation: varchar 255 characters )
   * qa_approval (example: true; validation: boolean integer )
* defect_log (database table)
   * id (auto-generated)
   * ncm_no (example: 12-123; validation: varchar 255 characters  )
   * device_sn (example: 123456789; validation: integer 255 )
   * first_name (example: Jimmy; validation: varchar 255 characters  )
   * last_name (example: Smith; validation: varchar 255 characters  )
   * qa_approval (example: true; validation: boolean integer )
   * user_entry (example: text; validation: varchar 255 characters )

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