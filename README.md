# The BIZZBY Frontend Challenge

## TODO
- [ ] Properly implement `cleaningRoute`
- [ ] Add big-screen breakpoints
- [ ] Add sentance-size-limiting breakpoints: aka figure out how to make line-breaks graceful
- [ ] Add form validation
- [x] Remove 300ms delay on `bzSelector`s
- [x] Add sound (chose the first pop noise I found. Be cooler if there were multiple tones of the same sound á la Clear.app)
- [x] Add jest unit tests
- [x] Sex-up `bzSelector` so size-changes are fluid
- [x] Pretty transitions on clicking `bzSelector`s
- [x] Create non-interactable `bzSelector`
- [x] Create and style bzInput
- [x] Setup flux: store, dispatcher, actionCreators
- [x] Detail view `selector`
- [x] Detail view layout
- [x] Animation between views (`CSSTransitionGroup`?)
- [x] SVG Icons
- [x] Setup stylus middlware, create stylus file
- [x] Implement basic layout
- [x] Setup browserify
- [x] Setup shared `routes` module, so server knows what routes are available
- [x] Setup react + flux + server-side rendering
- [x] npm init, folder structure, setup basic build script

### Running locally
Bundle up the client, then serve on `localhost:8080`:

```bash
$ npm run build
$ npm start
```

### Developing locally
Install nodemon (an awesome little util that restarts the server when js changes occur), then serve, then run watchify to bundle up changes when they occur.

```bash
$ npm install -g nodemon
$ nodemon server.js 8080

# in another window/tab/session/whatever
$ npm run watch
```

## What's cool about this project
- [React](http://facebook.github.io/react/)
- [Flux](http://facebook.github.io/flux/)
- [Jest](http://facebook.github.io/jest/)
- [SVG icons](http://iestynwilliams.net/icons-for-the-web-in-2014)
- [@fat's fancy CSS coding guidelines](https://gist.github.com/fat/a47b882eb5f84293c4ed#is-stateOfComponent)

## If given time, some things I would research and implement to make this project feature-complete (or better) compared to the actual Bizzby app...
- Use a fluid-layout JS library like packery (I attempted this, but got caught up fighting with bower. I could get it to work with browserify, but not with server rendering. Isomorphic JS tech is still young!)
- Use a solid JS-based animation library (CSS doesn't cut it for anything remotely complex)

## Some other open-source stuff I've done that may interest you
- [Sliderrr](https://github.com/iest/sliderrr): a websocket-powered, collaberative dribbble viewer (runs great on a raspberry pi)
- [emRuler](https://github.com/iest/emRuler): shows the width or height of the viewport in ems
- [Chosem](https://github.com/iest/Chosem): an ember-port of the [Chosen](http://harvesthq.github.io/chosen/) library that I built in November 2013
