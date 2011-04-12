#!/usr/bin/env node

var Klass = require('./Source/Klass.js');
require('./Source/Klass.Options.js');
require('./Source/Klass.Events.js');
require('./Source/Klass.Store.js');

var myClass = new Klass(null, {

	options: {
		energy: 10
	},

	init: function(options){
		this.setOptions(options);
		console.log('woot!');
	}
}, Klass.Options, Klass.Store);

var foo = new myClass({
	energy: 20
}).store('food', 'in the frige');

console.log(foo.retrieve('food'));

console.log(foo.options.energy);
