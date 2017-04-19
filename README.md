# tempus-code-challenge

Code challenge for Tempus building a simple, full-stack web application given a basic set of functional and technical requirements that allows doctors and patients to collect and share healthcare information.

## Table of contents

1. [Install](#install)
1. [Usage](#usage)
1. [Walkthough](#Walkthough)
1. [Data Schema](#data_schema)
1. [License](#license)

## Install

Clone and install all project dependencies from the command line with `npm install`.

## Usage

From the command line, enter:

```bash

$ npm run api && npm start

```

This will start a Node.js server that connects with an mLab MongoDB database and a Webpack server hosting the application. In your browser, go to `localhost:3000` and it should connect to the project serving the homepage. The backend server is served at `localhost:3001`, which you can make `GET` requests for data at defined routes.

### Login Accounts

Login credentials for a doctor account:

>username: doctor1 <br /> password: asdfjkl;

Login credentials for a patient account:

>username: patient1 <br /> password: asdfjkl;

Other user accounts can be accessed by incrementing the numerical value (i.e. `doctor3`) up to 5.

### Usage Walkthrough

When logged in, the header navigation component will have a link to view all patients as well as an indicator if a doctor is _signed in as doctor_.

On the view all patients page, a doctor will be presented with a table list of patients displaying the patients' personal details. A search bar is provided for searching for a **patient's _name_ only**. On the right side of the page, a `View` button can be clicked to access a patient's record. **A patient account will not be able to access this page.**

On a patient record page, a doctor can again see the patient's personal details as well as a table list of past, future, and pending appointments with details. In the table, an appointment displays a status of being `Active`, `Pending`, or `Cancel`. When status is `Pending`, **only** a doctor may change it to `Active`. When declining a request with `Cancel`, **only** a doctor will be presented a modal to give a short explanation message to decline the appointment request. **Canceling an appointment is a permanent behavior and cannot be changed.** Furthermore, there is an option to upload a file to the patient's record. **This feature is not implemented... yet.**

The `My Record` page is similar to the patient record page but displays the record of the current authenticated user, including doctors.

Additionally, a button below the patient/doctor's name will lead to a make appointment page.

### Appointment

A doctor or patient can schedule an appointment between the two, by entering a date and time, subject, and selection of a doctor. This will create an appointment that will be `Pending` until either a doctor sets it to `Active` or a doctor or patient sets it to `Cancel`.

## Walkthrough

### Development

After receiving the challenge with instructions, I brainstormed what technologies to work with, other than the required Node.js server. I am comfortable with using Express and used that to generator a backend server, using MongoDB as a database and Mongoose for object modeling. I used the Express generator to give me a good starting point to build out routes. I'm in the midst of learning React and Redux and decided to use that for the front end.

My first thought process was to come up with object models for a user and appointment and their relationships. For a user, other than the required attributes, I added a boolean attribute `doctor` to indicate if a user is a doctor or patient and a `appointments` that holds reference ids to appointments. For appointments, I added a `doctor` and `patient` id references as foreign keys. I'd assumed a both doctor and patient have a one-to-many relationship with appointments. I configure MongoDB to drive the data storage for these objects and at the midpoint, I decided to use a mLab deployment to serve my database needs instead of a local server.

I had several branches for difference stages and broken points in my development process. Most prominently, I initially built out the backend with pug templating but that does not adhere to SPAs so I had another branch for react and redux. Second try was messy, so I began a third try and referenced both branches while building off a new branch with more finesse. I thoroughly tested the backend with POSTMAN to ensure I was correct data and that the requests worked smoothly.

It was huge learning process for coming up with the front-end with React and Redux. I was fairly new to those technologies and it took quite some time googling for answers to errors I was running into. There was one tutorial that helped me out a lot in getting most things to work but that tutorial diverged too much from this project and it became no use. A difficult process for me was the authentication system and to come up with a solution for permissions to access pages and how components would render based if the use was a doctor or not. It was not a joyful experience debugging this process but eventually the solution I ended up with worked almost 100%.

### Post-Development

There are definitely a lot more improvements that can be made after limited time. I would definitely write test cases to ensure sections worked but I was busy building out the features and made sure they function the way I intended to. I would have used the Jasmine framework to do test case and run automating test tasks with Gulp. I don't usually comment on my personal projects but I'm aware of the importance of it for shared repos. There are some ugly fixes that I need to find another way of solving as well and I was not able to implement the file attachments to patients. Form validation...yep.

- [ ] Test cases
- [ ] Overall visual design
- [ ] Better commenting
- [ ] Form validation
- [ ] Handling bad requests on backend
- [ ] Break apart user component
- [ ] Performance, etc.

## Data Schema

### User (Doctor/Patient)


|                | Type                 |
|----------------|----------------------|
| username       | String               |
| password       | String (bcrypt Hash) |
| name           | String               |
| age            | Number               |
| emailAddress   | String               |
| mailingAddress | String               |
| phoneNumber    | String               |
| appointments   | [String (ObjectId)]  |
| doctor         | Boolean              |
| file           | String               |

### Appointment

| Appointment | Type               |
|-------------|--------------------|
| date        | Date               |
| subject     | String             |
| message     | String             |
| status      | String             |
| doctor      | String (ObjectId)  |
| patient     | String (ObjectId)  |

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
