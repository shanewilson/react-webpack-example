`Buzzwords: #reactjs #gulp #webpack #jest #stylus #bower #selenium`

Technologies
=

- [React](http://facebook.github.io/react/) - A Javascript Library For Building User Interfaces
- [Gulp.js](http://gulpjs.com/) - The streaming build system
- [Webpack](http://webpack.github.io/) - Module Bundler
- [Jest](http://facebook.github.io/jest/) - Painless Javascript Unit Testing
- [Nightwatch](http://nightwatchjs.org/) - is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites.
- [Stylus](http://learnboost.github.io/stylus/) - Expressive, dynamic, robust CSS
- [Jeet](http://jeet.gs/) - A grid system for humans
- [Axis](https://github.com/jenius/axis) - Axis is a terse, feature-rich css library built on top of stylus

Setup
=

The project is setup to use Bower and NPM

```
> npm run deps
```

Tests
=

Browser tests are run with Nightwatch

```
> npm run browsertest
...

Starting selenium server in parallel mode... started - PID:  69637

Started child process for env:  firefox

Started child process for env:  chrome

 chrome 	Test Test Suite
 chrome 	===============
 chrome
 chrome 	Results for:  step one
 chrome 	✔  Element <body> was visible after 74 milliseconds.
 chrome 	✔  Element <button[name=btnG]> was visible after 54 milliseconds.
 chrome
 chrome 	OK. 2 assertions passed. (4753 ms)
 chrome
 chrome 	Results for:  step two
 chrome 	✔  Testing if element <#main> contains text: "The Night Watch".
 chrome
 chrome 	OK. 1 assertions passed. (2251 ms)
 chrome
 chrome 	OK. 3 total assertions passed. (7036 ms)

 firefox 	Test Test Suite
 firefox 	===============
 firefox
 firefox 	Results for:  step one
 firefox 	✔  Element <body> was visible after 176 milliseconds.
 firefox 	✔  Element <button[name=btnG]> was visible after 53 milliseconds.
 firefox
 firefox 	OK. 2 assertions passed. (4863 ms)
 firefox
 firefox 	Results for:  step two
 firefox 	✔  Testing if element <#main> contains text: "The Night Watch".
 firefox
 firefox 	OK. 1 assertions passed. (3375 ms)
 firefox
 firefox 	OK. 3 total assertions passed. (8273 ms)
```

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

Production
=

Webpack bundles all the assets in production mode and Gulp creates unique file names for caching

```
npm run dist
...
Found 3 matching tests...
 PASS  __tests__/components/Breadcrumb-test.js (2.396s)
 PASS  __tests__/components/NavBar-test.js (2.473s)
 PASS  __tests__/components/LinkTo-test.js (3.064s)
3 tests passed (3 total)
Run time: 5.97s
...
Environment Production
...
> cd dist
> python -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000
...
> open http://localhost:8000/
```
