
(function(Klass){

Klass.Events = new Klass(null, {

	_events: {},

	listen: function(type, fn){
		if (typeof type != 'string'){
			for (fn in type) this.listen(fn, type[fn]);
		} else {
			(this._events[type] || (this._events[type] = [])).push(fn);
		}
		return this;
	},

	once: function(type, fn){
		var once = function(){
			fn.apply(this.ignore(type, once), arguments);
		};
		this.listen(type, once);
	},

	ignore: function(type, fn){
		var events = this._events[type];
		if (events){
			if (!fn){
				for (var l = events.length; l-- ;) delete events[l];
			} else {
				var index = events.indexOf(fn);
				if (index != -1) delete events[index];
			}
		}
		return this;
	},

	fire: function(type, args){
		var events = this._events[type], i, l;
		if (events) for (i = 0, l = events.length; i < l; i++) events[i].apply(this, args);
		return this;
	}

});

})((typeof module != 'undefined' && module.exports && require('./Klass.js')) || Klass);
