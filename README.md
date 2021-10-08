bout the Project 
This is a simple app that sends users emails and gets reports of users how have an email sent to 

before running the app

1- make sure to run npm install 

2- create a MongoDB account, add the link to the .env file 


libraries that been used 

1- nodemailer

2- MonoDB

3- express


How to test the API

to get the users email report
GET: https://email-project-node-js.herokuapp.com/users/get-emails-report

to send email 
POST: https://email-project-node-js.herokuapp.com/users/send-hello-email
JSON -> 
{
"email":"User@gmail.com",
"user":"User"

}
