# The BIZZBY Frontend Challenge

## TODO
- [ ] Properly implement `cleaningRoute`
- [ ] Add big-screen breakpoints
- [ ] Add sentance-size-limiting breakpoints
- [ ] Add form validation
- [x] Remove 300ms delay on `bzSelector`s
- [x] Add sound (chose the first pop noise I found. Be cooler if there were multpile tones of the same sound á la Clear.app)
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

### Requirements
* [x] [check out the screens here](http://www.bizzby.com/). 
* [x] We're a mobile-first company so your delivery must be mobile focused
* [x] Your solution needs work on different mobile phones and platforms
* [x] Your code should be tested (you unit test right?)
* [x] Please don't use grunt.js or gulp.js
* [x] We're obsessed with UI and UX so play attention to little details (show-off your CSS skills)
* [x] Give particular care to the touch and feel responsiveness
* [x] Consider using a MVC JS framework such as Angular.js, Ember.js, Backbone or another of your choice (explain wby you've chosen it)
* [x] You can use CoffeeScript, LESS, SASS, or other community accepted best practices
* [x] Make use of Facebook react.js framework
* [ ] Point us to your contribution to open source projects
* [x] Demonstrate you using your own build script like Makefile
* [ ] You can just submit a PR here
* [ ] If you've got a project or code your super pround of feel free to provide this as part of your submission as long as it fits in with the above requirements.
