<h1>About the Project </h1>
This is a simple app that sends users emails and gets reports of users how have an email sent to 

<h1>before running the app</h1>

1- make sure to run<b> npm install </b>

2- create a MongoDB account, add the link to the .env file 


<h1>libraries that been used </h1>

1- nodemailer

2- MonoDB

3- express


<h1>How to test the API</h1>

to get the users email report <br/>
GET: https://email-project-node-js.herokuapp.com/users/get-emails-report
</br><br/>
to send email<br/> 
POST: https://email-project-node-js.herokuapp.com/users/send-hello-email
<br/><br/>
JSON -> <br/>
{<br/>
"email":"User@gmail.com",<br/>
"user":"User"
<br/>
}
