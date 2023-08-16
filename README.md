# Emailer

This application allows us to send an email to each individual user with their respective login details

Created for our biggest client - our Portal allows to create users for the Mobile App via bulk upload which uses .CSV files.

It takes AN input from the .CSV file - used to upload on to the portal - & sends the email(s).

Example of the .CSV file can be found in the repository "exmaple_data.csv"

Stack used:

NodeJS
SQL

The idea of this application is to take the .CSV file the client used to create new users (1000+ users at times) & row by row, send an email to each individual containing their login credentials to the mobile application. 

The flow of the application is noted below:

PLEASE NOTE, THIS WAS RUN LOCALLY.

Ensure the .CSV file is located within folder path so we can set this within app.js

Run db.js to create an instance of the DB on local machine if not done so already which creates a small DB with relevant tables/fields

Run insertData.js which includes the .CSV file and inserts values into the DB > users table in their corresponding fields.

Run app.js to send credentials to each user.




