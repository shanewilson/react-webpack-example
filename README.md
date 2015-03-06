`Buzzwords: #reactjs #immutablejs #webpack #jest #stylus #selenium #hot-module-replacement #es6 #babeljs`

version with Gulp: 8132c077870d41fbb08c9b2562b6204ea5cc4a75
version with Browser-sync: d7d251bea5935ceafdd89700ad6ff986c32c506c

Technologies
=

- [React](http://facebook.github.io/react/) - A Javascript Library For Building User Interfaces
- [React-Router](https://github.com/rackt/react-router) - A complete routing library for React.
- [ImmutableJS](http://facebook.github.io/immutable-js/) - Immutable collections for JavaScript
- [Webpack](http://webpack.github.io/) - Module Bundler
- [Jest](http://facebook.github.io/jest/) - Painless Javascript Unit Testing
- [Nightwatch](http://nightwatchjs.org/) - is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites.
- [Stylus](http://learnboost.github.io/stylus/) - Expressive, dynamic, robust CSS
- [Jeet](http://jeet.gs/) - A grid system for humans
- [Axis](https://github.com/jenius/axis) - Axis is a terse, feature-rich css library built on top of stylus
- [Babel](https://babeljs.io/) - Babel will turn your ES6+ code into ES5 friendly code, so you can start using it right now without waiting for browser support

Development
=

The development server is setup using Webpack

```
> npm start
https://localhost:8080/
webpack result is served from /js/
content is served from .../react-webpack-example/src
404s will fallback to /index.html
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
> npm run browser
...

Starting selenium server in parallel mode... started - PID:  11996

Started child process for env:  firefox

Started child process for env:  chrome

 firefox 	Test Test Suite
 firefox 	===============
 ...
 firefox
 firefox 	OK. 3 assertions passed. (542 ms)
 firefox
 firefox 	OK. 7 total assertions passed. (4429 ms)

 chrome 	Test Test Suite
 chrome 	===============
 ...
 chrome
 chrome 	OK. 3 assertions passed. (1108 ms)
 chrome
 chrome 	OK. 7 total assertions passed. (4790 ms)
```

Production
=

Webpack bundles all the assets in production mode and Gulp creates unique file names for caching

```
NODE_ENV=production npm run build
...
Hash: ff11248f45c60ea43a0a
Version: webpack 1.7.1
Time: 7934ms
                               Asset     Size  Chunks             Chunk Names
    main.ff11248f45c60ea43a0a.min.js   294227       0  [emitted]  main
main.ff11248f45c60ea43a0a.min.js.map  2626969       0  [emitted]  main
 main.ff11248f45c60ea43a0a.min.js.gz    86858          [emitted]
    + 242 hidden modules

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
