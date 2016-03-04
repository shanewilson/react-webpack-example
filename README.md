`Buzzwords: #redux #reactjs #webpack #es6 #babeljs #hyperscript #enzyme`

- [Version with PostCSS](https://github.com/shanewilson/react-webpack-example/tree/e461a63c7b09d1f57c895be187159caa8ed82fba)
- [Version with Stylus](https://github.com/shanewilson/react-webpack-example/tree/64e435063f6e9f8aa880965f7ea5099d28e7bf50)
- [Version with Gulp](https://github.com/shanewilson/react-webpack-example/tree/8132c077870d41fbb08c9b2562b6204ea5cc4a75)
- [Version with Browser-sync](https://github.com/shanewilson/react-webpack-example/tree/d7d251bea5935ceafdd89700ad6ff986c32c506c)

Technologies
=

- [React](http://facebook.github.io/react/) - A Javascript Library For Building User Interfaces
- [Redux](http://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
- [Webpack](http://webpack.github.io/) - Module Bundler
- [Babel](https://babeljs.io/) - Babel will turn your ES6+ code into ES5 friendly code
- [Enzyme](http://airbnb.io/enzyme/) - makes it easier to assert, manipulate, and traverse your React Components.

Development
=

The development server is setup using Webpack

```
❯ npm start
...
TEST_ENV=watch karma start karma.config.js
⌛  Webpack bundling assets for the first time...
⚡  Server running at localhost:8080
   Proxying to API running at http://localhost:5000
webpack built f93ce65a51c93393a327 in 1759ms
Version: webpack 1.12.14
Time: 1759ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.86 MB       0  [emitted]  bundle
webpack: bundle is now VALID.
02 04 2016 01:58:39.968:WARN [karma]: No captured browser, open http://localhost:9876/
02 04 2016 01:58:39.975:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
02 04 2016 01:58:39.979:INFO [launcher]: Starting browser PhantomJS
02 04 2016 01:58:40.471:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#dNDHkKK04rMIhQEGAAAA with id 10265082
...
SUMMARY:
✔ 26 tests completed
```

Tests
=

Unit tests are run using Karma.

```
❯ npm test
...
02 04 2016 01:59:43.148:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
02 04 2016 01:59:43.154:INFO [launcher]: Starting browser PhantomJS
02 04 2016 01:59:43.617:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#OVwa16Xpcdld6HxyAAAA with id 84226691
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 26 of 26 SUCCESS (0.037 secs / 0.02 secs)
```

Production
=

Webpack bundles all the assets in production mode

```
❯ NODE_ENV=production npm run build
...
Hash: 581483788fa821923595
Version: webpack 1.12.14
Time: 6040ms
                             Asset     Size  Chunks             Chunk Names
    bundle.581483788fa821923595.js   106 kB       0  [emitted]  bundle
      libs.581483788fa821923595.js   133 kB       1  [emitted]  libs
bundle.581483788fa821923595.js.map   847 kB       0  [emitted]  bundle
  libs.581483788fa821923595.js.map  1.55 MB       1  [emitted]  libs
 bundle.581483788fa821923595.js.gz  32.7 kB          [emitted]
   libs.581483788fa821923595.js.gz  38.3 kB          [emitted]
   [0] multi bundle 28 bytes {0} [built]
   [0] multi libs 40 bytes {1} [built]
    + 482 hidden modules
```

Resources
=

- https://github.com/petehunt/webpack-howto
