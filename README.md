# The BIZZBY Frontend Challenge

## TODO
- [ ] Implement jest unit testing
- [ ] Setup flux: store, dispatcher, actionCreators
- [ ] Detail view `selector`
- [ ] Detail view layout
- [ ] Animation between views (`CSSTransitionGroup`?)
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
Bundle the client and watch for changes, then serve as above.

```bash
$ npm run watch
$ npm start
```

## Notes
- React + server-side rendering
- Mobile first
- Stylus, browserify, uglifyjs, jest...
- Wrap up "build" script into package.json
- Routes:
  - Service selection; Detail view
  - Both routes show on wide screens. Handle this purely with CSS (including transitions between)

## Requirements
* [x] [check out the screens here](http://www.bizzby.com/). 
* [x] We're a mobile-first company so your delivery must be mobile focused
* [x] Your solution needs work on different mobile phones and platforms
* [ ] Your code should be tested (you unit test right?)
* [x] Please don't use grunt.js or gulp.js
* [ ] We're obsessed with UI and UX so play attention to little details (show-off your CSS skills)
* [ ] Give particular care to the touch and feel responsiveness
* [x] Consider using a MVC JS framework such as Angular.js, Ember.js, Backbone or another of your choice (explain wby you've chosen it)
* [ ] You can use CoffeeScript, LESS, SASS, or other community accepted best practices
* [x] Make use of Facebook react.js framework
* [ ] Point us to your contribution to open source projects
* [ ] Demonstrate you using your own build script like Makefile
* [ ] You can just submit a PR here
* [ ] If you've got a project or code your super pround of feel free to provide this as part of your submission as long as it fits in with the above requirements.
