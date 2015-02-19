`Buzzwords: #reactjs #immutablejs #gulp #webpack #jest #stylus #bower #selenium #hot-module-replacement`

Technologies
=

- [React](http://facebook.github.io/react/) - A Javascript Library For Building User Interfaces
- [React-Router](https://github.com/rackt/react-router) - A complete routing library for React.
- [ImmutableJS](http://facebook.github.io/immutable-js/) - Immutable collections for JavaScript
- [Gulp.js](http://gulpjs.com/) - The streaming build system
- [Webpack](http://webpack.github.io/) - Module Bundler
- [Jest](http://facebook.github.io/jest/) - Painless Javascript Unit Testing
- [Nightwatch](http://nightwatchjs.org/) - is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites.
- [Stylus](http://learnboost.github.io/stylus/) - Expressive, dynamic, robust CSS
- [Jeet](http://jeet.gs/) - A grid system for humans
- [Axis](https://github.com/jenius/axis) - Axis is a terse, feature-rich css library built on top of stylus

Development
=

The development server is setup using Webpack

```
> npm start
Environment Development
...
Starting Webpack Development Server
Listening http://localhost:9000/webpack-dev-server/index.html
```
Tests
=

Unit tests are run using Jest.

```
> npm test
...

Found 3 matching tests...
 PASS  __tests__/components/Breadcrumb-test.js (2.396s)
 PASS  __tests__/components/NavBar-test.js (2.473s)
 PASS  __tests__/components/LinkTo-test.js (3.064s)
3 tests passed (3 total)
Run time: 5.97s
```

Browser tests are run with Nightwatch

```
> npm run browsertest
...

Starting selenium server in parallel mode... started - PID:  11996

Started child process for env:  firefox

Started child process for env:  chrome

 firefox 	Test Test Suite
 firefox 	===============
 firefox
 firefox 	Results for:  step one
 firefox 	✔  Element <body> was visible after 93 milliseconds.
 firefox 	✔  Element <nav> was visible after 50 milliseconds.
 firefox 	✔  Testing if element <nav> is present.
 firefox 	✔  Testing if element <h1> contains text: "Projects".
 firefox
 firefox 	OK. 4 assertions passed. (3855 ms)
 firefox
 firefox 	Results for:  step two
 firefox 	✔  Testing if element <.ns-LinkTo--projects> is present.
 firefox 	✔  Element <.ns-LinkTo--project> was visible after 26 milliseconds.
 firefox 	✔  Testing if element <h1> contains text: "Project PR1".
 firefox
 firefox 	OK. 3 assertions passed. (542 ms)
 firefox
 firefox 	OK. 7 total assertions passed. (4429 ms)

 chrome 	Test Test Suite
 chrome 	===============
 chrome
 chrome 	Results for:  step one
 chrome 	✔  Element <body> was visible after 58 milliseconds.
 chrome 	✔  Element <nav> was visible after 41 milliseconds.
 chrome 	✔  Testing if element <nav> is present.
 chrome 	✔  Testing if element <h1> contains text: "Projects".
 chrome
 chrome 	OK. 4 assertions passed. (3647 ms)
 chrome
 chrome 	Results for:  step two
 chrome 	✔  Testing if element <.ns-LinkTo--projects> is present.
 chrome 	✔  Element <.ns-LinkTo--project> was visible after 52 milliseconds.
 chrome 	✔  Testing if element <h1> contains text: "Project PR1".
 chrome
 chrome 	OK. 3 assertions passed. (1108 ms)
 chrome
 chrome 	OK. 7 total assertions passed. (4790 ms)
```

Production
=

Webpack bundles all the assets in production mode and Gulp creates unique file names for caching

```
npm run dist
...
Found 3 matching tests...
...
Environment Production
...
Starting selenium server in parallel mode...
...
> cd dist
> python -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000
...
> open http://localhost:8000/
```

Resources
=

- https://github.com/petehunt/webpack-howto
- http://gaearon.github.io/react-hot-loader/
