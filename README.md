# The BIZZBY Front-end Challenge

## View the demo
TBA - probably bizzby.iest.co

## Table of contents
- [Conclusion](#conclusion)
- [Running locally](#running-locally)
- [Developing locally](#developing-locally)
- [Technologies used on this project](#technologies-used-on-this-project)
- [If given time, some things I would research and implement to make this project feature-complete (or better) compared to the actual Bizzby app…](#if-given-time-some-things-i-would-research-and-implement-to-make-this-project-feature-complete-or-better-compared-to-the-actual-bizzby-app)
- [Where are all your unit tests?](#where-are-all-your-unit tests)
- [Tested on...](#tested-on)
- [Sketch file](#sketch-file)
- [Some other open-source stuff I've done that may interest you](#some-other-open-source-stuff-I've-done-that-may-interest-you)

## Conclusion
All in, it probably took me around 24 hours of work (51 commits / 2,505 lines added / 1,038 lines removed) to get the project to where it is now. That includes going on wild tangents down rabbit holes trying to figure out various things (I spent a good 3 hours trying to figure out why Safari would not play nice with a particular page-slide animation — [I gave in eventually and simplified](https://github.com/iest/Frontend-Challenge/commit/54944870f7be8b848f3c645a4079aca11d399061)), as well as diving into various API docs to figure out where I'd made mistakes.

I started out writing CSS to recreate the design like-for-like with the iOS app, but after grabbing some screenshots and having a [play in Sketch](https://github.com/iest/Frontend-Challenge/tree/master/bizzby%20icons.sketch) I decided to riff on it instead of duplicating it. The font is Freight Sans Pro, served from Typekit — which although is not the font you guys at Bizzby are using, it looks very similar (and it is beautiful).

I added a little pop sound when making selections (inspired by the product video), but for some reason it performs terribly on Safari 8 on the Mac (it’s fine on iPhone, weirdly). I was about to dive into the Web Audio API docs to see how to do it without using an `<audio>` element, but figured my implementation was good enough for demo purposes (it also works best on Chrome, which is something I [hate saying](http://www.technologizer.com/wp-content/uploads/2010/09/bestie.jpg).

There are *some* rendering bugs. I managed to iron out most of them, but the transition between the two routes is a bit hairy. There’s also no transition when any of the words or selectors move around on the screen like on the Bizzby app. I would have loved to spend more time to get all the animations working perfectly in all browsers, but I figured 24 hours of work is enough to prove to you guys what I can do! :D

How far is this app from being fully functional compared to the Bizzby iOS app? Not that far at all. It’s been architected to be a fully-functional app — it’s no prototype. Obviously there are missing screens, but adding them, hooking up to a server API, and writing unit tests is all you’d really need to do to make it work fully. Most of the time was sunk into making selection UI work properly — hooking up the Flux components was a doddle.

If you want to see how I went about doing stuff, check out [TODO.md](https://github.com/iest/Frontend-Challenge/blob/master/TODO.md) to see my task list (in descending order).

Oh, and there’s no grunt or gulp used here. I used a combination of `nodemon`, `watchify`, and stylus-middleware to achieve what I wanted. IRL I’d use gulp as it makes that kind of stuff much easier, especially setting up `livereload` servers and such. I’m sure it can all be done without gulp/grunt, but why bother when you can save yourself time and just use build tools?

### Running locally
Bundle up the client, then serve on `localhost:8080`:

```bash
$ npm run build
$ npm start
```

### Developing locally
Uses nodemon (an awesome little util that restarts the server when js changes occur) to serve, then run watchify to bundle up changes when they occur.

```bash
$ npm run dev

# in another window/tab/session/whatever
$ npm run watch
```

## Technologies used on this project
- [React](http://facebook.github.io/react/): super-declarative, super-fast views
- [Flux](http://facebook.github.io/flux/): uni-directional dataflow for UIs
- [Jest](http://facebook.github.io/jest/): auto-mock testing that work great with react
- [Stylus](http://learnboost.github.io/stylus/): [my favourite CSS pre-processor](https://github.com/iest/Frontend-Challenge/blob/master/public/bizzby.styl)
- [SVG icons](http://iestynwilliams.net/icons-for-the-web-in-2014): vectors with finer control than icon-fonts
- [@fat's fancy CSS coding guidelines](https://gist.github.com/fat/a47b882eb5f84293c4ed#is-stateOfComponent): my new favourite CSS naming convention

## If given time, some things I would research and implement to make this project feature-complete (or better) compared to the actual Bizzby app...
- Use a fluid-layout JS library like packery (I attempted this, but got caught up fighting with bower. I could get it to work with browserify, but not with server rendering. Isomorphic JS tech is still young!)
- Use a solid JS-based animation library/roll my own (CSS doesn't cut it for anything remotely complex)
- Spend time perfecting the breakpoint widths/styles

## Where are all your unit tests?
Test-driven-development is great if you have a spec your working towards. This project is still in the R&D phase for me. Typically, the next thing I would do after experimenting with different behaviours would be to spec out how particular modules should work, then write unit tests for that behaviour. Plus I'd rather make pretty stuff than write unit tests all day :)

## Tested on...
- Safari on iOS 8, Apple iPhone 5
- Safari on iOS 7, Apple iPad Mini
- Safari 8.0, OS X Yosemite
- Firefox 31, OS X Yosemite
- Chrome 37,  OS X Yosemite
- IE11, Windows 8.1

## Sketch file
If you have [Sketch 3](http://bohemiancoding.com/sketch/), check out `bizzby icons.sketch` to see how I put together the icons, and to see a tiny style guide I did for the project.

## Some other open-source stuff I've done that may interest you
- [Sliderrr](https://github.com/iest/sliderrr): a websocket-powered, collaberative dribbble viewer (runs great on a raspberry pi)
- [emRuler](https://github.com/iest/emRuler): shows the width or height of the viewport in ems
- [Chosem](https://github.com/iest/Chosem): an ember-port of the [Chosen](http://harvesthq.github.io/chosen/) library that I built in November 2013
