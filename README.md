# scheduling-portal

A simple, full-stack web application that allows doctors and patients to collect and share healthcare information.

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

username: doctor1 <br /> password: asdfjkl;

Login credentials for a patient account:

username: patient1 <br /> password: asdfjkl;

Other user accounts can be accessed by incrementing the numerical value (i.e. `doctor3`) up to 5.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
