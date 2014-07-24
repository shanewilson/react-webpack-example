`Buzzwords: #reactjs #gulp #webpack #jest #stylus #bower`

Technologies
=

- [React](http://facebook.github.io/react/) - A Javascript Library For Building User Interfaces
- [Gulp.js](http://gulpjs.com/) - The streaming build system
- [Webpack](http://webpack.github.io/) - Module Bundler
- [Jest](http://facebook.github.io/jest/) - Painless Javascript Unit Testing
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

Tests are run using Jest.

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
> npm run serve
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