# SurpiseMe

## About
In this project, the goal was to build an API that fetches data from Chuck's and Kanye's API's,\
and it had some surprising conditions on the data display.\
As requested, surprises are made and you will get different kinds of responses with different kind of data.\

## Getting started
# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) in it's latest version.

- Install dependencies
```
npm install
npm i express
npm i hbs
npm i postman-request
```
- navigate to http://localhost:3000/ and start.
## JSON we get
There's no data logging currently.
The data sent from the app is  a JSON:
```json
{
 "code": "200 for success, 400 for failure.",
 "type": "either sum/chuck/kanye",
 "value": "the data return from the API"
}
```
## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| **iSAuraProject**           | Contains the project.                                                                         |
| **node_modules**            | Contains all  npm dependencies                                                                |
| **web-server**              | Contains the source code (JS, CSS, html)                                                      |
| **web-server/node_modules** | Contains all  npm dependencies                                                                |
| **web-server/public**       | Controllers define functions to serve various express routes.                                 |
| **web-server/src**          | Contains all backend source code for the app.                                                 |
| **web-server/templates**    | Contains the html(hbs) files.                                                                 |
| package.json                | Contains npm dependencies                                                                     |

#### A little personal note:
This project was my first time (ever) using JS and NodeJS. A week ago I zero knowledge of these two and look at me now.\
Even though it's not perfect, I'm proud of what I made and appreciate the challange and the opportunity you guys gave me.

I hope you'll be surprised,\
Bar
