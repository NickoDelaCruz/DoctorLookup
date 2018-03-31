# DoctorLookup

#### Code Review, using API

#### Nicko Dela Cruz

## Description

Application using two API calls getting a search result by either Medical Issue or Doctor's Name.

## Setup

Clone this repository and navigate to root directory.

To install dependencies:

`$ npm install`  

Free API Key: https://developer.betterdoctor.com/

Create .env file

add:

exports.apiKey="YourAPiKeyNoQuotes"

To run program and open in browser:

`$ npm run start`



## Functionality

* User can search local doctors by medical issue or Doc Name.
  - Input: cough
  - Example output:


  Speciality: Pulmonary Disease
  Name: William Bowerfind
  Address: 4805 NE Glisan St
  City: Portland , OR 97213
  CALL: 5032152300
  Accepting New Patients: true
  Website: undefined or www.example.com

  - Input: Sam
  - Example output:


  (Profile Picture)

  First Name: Samuel
  Last Name: Shiley
  Address: 9205 SW Barnes Rd
  City: Portland
  State: OR
  ZIP: 97225
  Phone: 5032161234
  Accepting New Patients: true
  Website: undefined or www.example.com
  Speciality: Otolaryngology



If no results user get's "NO RESULTS"

## Technologies Used

* JavaScript
* JQuery
* HTML
* Webpack

## Known Bugs

Websites are undefined if doc has no website, found a potential fix but no time atm.

Phone numbers can't have dashes (503-432-4320)

Accepting new patients is either true or false (cant find a doc with false) but would like to change to Y/N.

## License

OS

Copyright (c) 2018 NickoDC
