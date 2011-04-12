
(function(Klass){

Klass.Store = new Klass(null, {

	_store: {},

	store: function(key, value){
		this._store[key] = value;
		return this;
	},

	retrieve: function(key, dflt){
		return this._store[key] || dflt;
	},

	dump: function(key){
		if (this._store[key]) delete this._store[key];
		return this;
	}

});

})((typeof module != 'undefined' && module.exports && require('./Klass.js')) || Klass);
