# Stretch Technology Group Project
This project is centered around thinking of a distinct problem and creating an application to solve the problem while learning a new technology. The main objective is not to have a fully functional application but instead use it as practice for learning Cypress while creating a minimal viable product. 


## Project Description:
The complete project spec and rubric can be found [here](https://frontend.turing.io/projects/module-3/stretch.html).

## Setup Instructions:
  1. `Fork` [this repository](https://github.com/peytonjo/Dad-Jokes).
  1. `Clone` it down to your local machine with `git clone <your SSH Key>`.
  1. Change into your directory with 
  1. Run `npm install` to compile the React application.
  1. Run `npm install cypress --save-dev` to install Cypress.
  1. Run `npm start` to see the app running locally.
  1. Run `<your text editor> .` to see the code in your text editor.
  1. Run `npm test` to see all of the tests running in your Terminal.
  1. Run `npx cypress open` to run all Cypress test.

### User Experience:
 * The user (Ideally a dad or enjoyer of 'dad jokes' who needs help with remembering a large backlog of corny setups and punchlines), should be immediately greeted by a 'dad joke,' randomly acquired from an API.
* If the API is not available, the user should see an error message
* If there is a joke, the user should be able to click the 'favorite' button to save it
* The user should be able to click on the 'User Icon' button to go to their personal joke page
* The user should be able to click on the 'Add a joke' button to go to the 'New joke' form
* The user should not be able to click the 'submit' button on the 'New Joke' form unless there is something added to the Input field
* After the user inputs a joke and clicks 'submit,' they should then be able to see their added joke when navigating to the personal joke page
* After the user clicks 'favorite' on the home screen, they should be able to see the favorited joke on their personal joke page
* The 'Return to Home' button should only appear when the user is not on the home page
* The user should be routed to the 'Random Joke' page after clicking the 'Return to Home' button

  
## The Working Application
Should:
* Have a home page that displays a random joke
* Have a nav bar with buttons to see the form page and user page
* Form page should have a working form that takes inputs and creates a card
* User page should display all user created cards and users favorited cards


## Learning Goals:
* Firm understanding of how to use Cypress 
* Become more comfortable with 'best use practices'
* gain a deeper understanding of React and React Router 

### Understand:

  
## Programming Languages and Technology Used:
* `React Library` 
* `React testing Library`, `Jest`, and `Cypress`
* `SCSS`
* `NPM` to compile the application and run tests

## Contributors:
### Creators/Owners:
* [Caleb Cyphers](https://github.com/calebcyphers)
* [Peyton Jones](https://github.com/peytonjo)
* [Jordon Smith](https://github.com/jdxsmith)
### Project Managers:
* [Leta Keane](https://github.com/letakeane)
* [Will Mitchell](https://github.com/wvmitchell)
