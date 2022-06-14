# 3rd challenge [GeeksHubs Academy]
## _Trello app_



The challenge is to create an APP capable of interacting with the API endpoints provided by [OMDBapi].

## Features

- The application will allow us to search for and display titles with the following criteria: Title, year of creation, image (poster) of the film.
- The application will allow this information to be displayed on different cards that will be displayed on the web.


## Assessment Requirements

- Correct use of React and Redux
- Various search endpoints
- Full README on Github


## Tech

Dillinger uses a number of open source projects to work properly:

- HTML5
- ES6
- React - Bootstrap 
- REACT - REDUX
- API [OMDBapi]
- Git

## Structure

The project has the following structure:

´´´
moviedb-app/
├─ node_modules/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ robots.txt
│  ├─ manifest.json
├─ src/
│  ├─ assets/
│  │     ├─
│  ├─ components/
│  │     ├─ home/
│  │     │     ├─ Landing.js
│  │     │     ├─ MovieCard.js
│  │     │     ├─ MoviesContainer.js
│  │     │     ├─ SearchForm.js
│  │     ├─ layout/
│  │     │     ├─ Footer.js
│  │     │     ├─ Navbar.js
│  │     │     ├─ spinner.gif
│  │     │     ├─ Spinner.js
│  │     ├─ APIKey.js
│  │     ├─ Services/Redux
│  │     │     ├─ Actions/
│  │     │     │     ├─searchActions.js
│  │     │     │     ├─index.js
│  │     │     ├─ Reducers/
│  │     │     │     ├─index.js
│  │     │     │     ├─searchReducer.js
│  ├─ index.css
│  ├─ index.js
│  ├─ app.css
│  ├─ app.js
├─ .gitignore
├─ package-look.json
├─ package.json
├─ README.md
´´´

## Dependencies

For this application the following dependencies have been required:

- @reduxjs/toolkit: v. 1.8.2
- axios: v. 0.27.2
- bootstrap: v. 4.6.0
- react: v. 17.0.2
- react-bootstrap: v. 1.5.2
- react-dom: v. 17.0.2
- react-redux: v. 8.0.2
- redux: v. 4.2.0
- redux-thunk: v. 2.4.1
- web-vitals: v. 2.1.4

## Installation

Clone the repository, then in a terminal run `npm install` to install the project dependencies. Finally open `moviedb-app` and compile the App `npm start`.


## License

MIT

**Free Software, learn and practices!**




[OMDBapi]:<https://www.omdbapi.com/>
[GeeksHubs Academy]:<https://github.com/GeeksHubsAcademy>

