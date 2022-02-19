# Interactive comments section

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

  This is a fully interactive comment section built as a full stack application using the MERN stack.
  Comments and their replies are saved and updated to a cloud mongoDB Atlas database using a node backend.
  The frontend updates imediately to user input thanks to React and Redux.
  Application is deployed live with the backend hosted on heroku and the frrontend hosted on netlify

### Screenshot

![](https://github.com/2XG-DEV/MERN-Comments-Section-FrontEnd/blob/master/Capture.PNG?raw=true)

### Links

- Live Frontend URL: https://merncommentsection.netlify.app/ 
- Live Backend URL: https://merncomments.herokuapp.com/

## My process

When it comes to full stack applications I like to start with the back and work my way to the front . I started by creating the database and the node server to create the API , used mongoose to model the comment document and the reply and then created the API end points. When working on the front end I started by adding the custom properties from my style-guide to the index.css file. Then I broke everything down into components and looked at the actions each one required and added it to redux to better manage the state of the application and then implemented each component

### Built with

- MongoDB
- Mongoose
- NodeJS
- Express


### What I learned

Putting together all the components required to build a full stack application , creating and modeling the database connecting to the API and interacting with the api from the frontend and deplying the entire application to the web.

### Continued development

  Making comment replies editable

### Useful resources
https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb

