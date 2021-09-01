# TOMEI Test Assignment

An test assignment we have created for singup a user.

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

## TOMEI Frontend (frontend)

### Project Screen Shot(s)
##### Desktop Mode
###### https://prnt.sc/1qxj18p
###### https://prnt.sc/1qxj5pi
##### Mobile Mode
###### https://prnt.sc/1qxjj4z
###### https://prnt.sc/1qxjl67

### Technologies Used
- React Js
- Redux
- Redux-thunk
- JavaScript
- SCSS
- Jest

### Installation and Setup Instructions (frontend)  

Installation of dependencies:

`npm install`  

To Run Test Suite:  

`npm run test`  

To Start Server:

`npm run start-dev`
It run application in qa mode and use all configuration we have set in environments/.env.development file. It required Redux DevTools to be added as browser extension.

`npm run start-qa`
It run application in qa mode and use all configuration we have set in environments/.env.qa file.

`npm run start-pro`
It run application in qa mode and use all configuration we have set in environments/.env.production file.  

To Visit App:

`localhost:3000` 


## TOMEI Backend (backend)

- In the backend i created backend api in clean architecture.
- It will capture name, email, password and profile image is optional and  will create an record and return the record.
- if image is upload with user info it will save the image and it can be access publicly.
- in case data missing or duplicate email or invalid file upload it will return json response to api
- CURD Opertation also present on the user
### Technologies Used
- JavaScript
- NodeJs
- ExpressJs
- MariaDB
### Installation and Setup Instructions (backend)

Install global dependencies

`npm install -g sequelize-cli`
`npm install -g mariadb` 
`sequelize db:migrate`

Installation of dependencies:

`npm install`
  
To Start Server:

`npm run dev`

To Access API on:

`http://localhost:4444`
