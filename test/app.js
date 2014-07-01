var Ember = require('ember'),
	App = Ember.Application.create();

App.ApplicationView = Ember.View.extend({
	defaultTemplate: require('./application.hbs')
});