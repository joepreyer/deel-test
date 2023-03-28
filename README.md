# Joe's Deel Autocomplete Assignment

## Overview

This app renders a simple auto-complete city search component. As a user, you can enter any text into the input element. After you have stopped typing for 300ms, the component triggers an API call to https://api.teleport.org/api/cities/?search=${searchTerm} and fills out a list of cities that match your search term, with the search term highlighted in the city name. You can select a city from the list using the mouse, or the arrow keys and enter button on your keyboard. Results are limited to 25 cities.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.