README
This README documents the basis of this repo and how to use it to set up a Trust's Web App to store the data

What is this repository for?
Set up a Web App for a Trust v 1.0

How do I get set up?
Ensure you have node installed with npm (got to https://nodejs.org/en/ and follow the instructions for your system)
When node is installed open a terminal (or CMD or PowerShell) 
Run 
`npm install -g firebase-tools`
to install the firebase CLI

then type 
`firebase login`
and login with your credentials (your firebase account username and password)


Ensure you have installed Git for your system
Follow these instructions 
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Clone this repo using this command in a new directory (where you wish to store the project)
`git clone https://shanester@bitbucket.org/shanester/foss-web-app.git`

You will also need to install Ionic for this process (may not have to in the future)
Run
`npm install ionic`

In the terminal cd into the project folder and run
`npm install`
It should take a bit of time and install lots of stuff

`cd` into the src folder

UPDATE the details
Open the file dbdetails.ts and delete everything between the word `export` and the words `export const dbDetails`

Change the address of the firebase DB:
Go to this page
`https://firebase.google.com/docs/web/setup`
and follow the instructions on how to Add Firebase To your App
In stage 3 you will get the details of how to get the initialization snippet.
Where it says (in your own snippet)
`var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };`

  copy everything starting with  the `var` sign until after the next `};`(this is a javascript object with your project settings)
  - you don't copy these lines `firebase.initializeApp(config); </script>`)-
   and paste the object into the dbdetails.ts file after the word `export `  (remember to leave a space between)

Go back to your firebase project and select the project you created.
Go to the Database menu (at the bottom) and click "Get Started"
On the left menu under the DEVELOP menu select Database
In the Database tab select the Rules tab
For now delete the rules and paste in the following

`{
  "rules": {
    ".read": true,
    ".write": true
  }
}`
and click PUBLISH
You will get the following warning
`Your security rules are defined as public, anyone can read or write to your database`
DON'T PANIC!

Go to the AUTHENTICATION option on the left menu
Choose Authentication / Sign-in Method
In Sign-In Provider click Email/Password and Enable it and Save this setting

Go to the USERS tab and create an account for yourself

   
   `cd` back up to the root directory (should just have to `cd ..` to get there)
   and see if everything works with 
   `ionic serve`
   which should spin up a local server for testing  

   

Contribution guidelines
*contact me (see below) if you wish to contribute

Who do I talk to?
repo owned by Shane Lester contact shanesapps@hotmail.com