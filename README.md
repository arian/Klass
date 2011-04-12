Klass
=====

Light and fast Class implementation for JavaScript, no fancy stuff or wrapped methods.
However it has a `.parent` method.

This is a bit experimenting, so don't expect too much ;)

Should work in Node.js too.

### Tested

As much as is in Klass.html and Klass-node.js, so not much.
Also only in Chrome and Node

### Mixins

- Events
- Store
- Options
- Bind
- Chain

### Other Classes

- Map

### Example

	var myClass = new Klass(parent, methods, mixin1, mixin2, ...);

### Methods

- myClass.implement - add new methods to the prototype
- myClass.extend - add static functions to the class
- myClass.decorate - decorate or replace old methods
- myClass.alias - aliases to methods

### Extending Classes

	// Parent Class
	var DarthVader = new Klass(null, {
		init: function(){
		},
		fight: function(arg1, arg2, arg3){ … }
	});

	// Child
	var Luke = new Klass(DarthVader, {
		fight: function(){
			return this.parent('fight', [arg1, arg2, arg3]);
		}
	});

### Notes

Most stuff is pretty directly taken from MooTools.  Use that if you want something
stable, it's FTW!
