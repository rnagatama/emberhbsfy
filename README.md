[![Build Status](https://travis-ci.org/rnagatama/emberhbsfy.png?branch=master)](https://travis-ci.org/rnagatama/emberhbsfy)

# emberhbsfy

[Ember][] [Handlebars] precompiler plugin for [Browserify][].

Compiles Handlebars templates using [ember-template-compiler][] to plain Javascript. [ember-template-compiler][] needs to be installed manually. If you use [Ember][] 1.5.1, then install [ember-template-compiler][] 1.5.1.

## Usage

Install emberhbsfy locally to your project:

    npm install emberhbsfy

ember-template-compiler will be automatically installed as [peer dependency][].

Then use it as Browserify transform module with `-t`:

    browserify -t emberhbsfy main.js > bundle.js

where main.js can be like:

```javascript
var Ember = require('Ember'),
    App = Ember.Application.Create();

    App.ApplicationView.extend({
        defaultTemplate: require('../templates/application.hbs')
    });
```

and application.hbs:

```html
<header>Header</header>
<section id="wrapper">{{outlet}}</section>
<footer>Footer</footer>
```

## Programmatic usage

When compiling using Javascript code custom extensions
can be set:

```javascript
var fs = require('fs'),
    emberhbsfy = require("emberhbsfy");

var browserify = require("browserify");
var b = browserify("./index.js");
b.transform(emberhbsfy);
b.bundle().pipe(fs.createWriteStream("./bundle.js"));
```


[ember-template-compiler]: https://www.npmjs.org/package/ember-template-compiler
[Ember]: http://emberjs.com/
[Handlebars]: http://handlebarsjs.com/
[Browserify]: https://github.com/substack/node-browserify
[peer dependency]: http://blog.nodejs.org/2013/02/07/peer-dependencies/
