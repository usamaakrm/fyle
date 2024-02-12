# Fyle Frontend Challenge - usaamah akram

#### A simple Angular app for displaying the github user profile and its repositories based on the username provided.

Hosted version of this application can be found here: https://flourishing-sawine-3b137d.netlify.app/ 

##### 1. Running the project
`ng serve` this will run the project on `localhost:4200`. make sure angualar cli and nodejs is installed on your system.

##### 2. Running the Unit test
`ng test` will run the test suits with karma on `localhost:9876`

To get the code coverage report use `ng test --code-coverage`

### Assumptions
1. If username Location is not available it will show 'User has not mention any location' as a empty placeholder

### Error and Edge cases
1. Error screen will show up witha error image/message and possible actions.
![Error](./readme/error.png?raw=true "Error Screen")





## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).