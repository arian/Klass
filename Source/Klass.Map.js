
(function(Klass){

Klass.Map = new Klass(null, {

	_keys: [],
	_values: [],
	length: 0,

	set: function(key, value){
		var index = this._keys.indexOf(key);
		if (index == -1){
			this._keys.push(key);
			this._values.push(value);
			this.length++;
		} else {
			this._values[index] = value;
		}
		return this;
	},

	get: function(key){
		var index = this._keys.indexOf(key);
		return (index != -1) ? this._values[index] : null;
	},

	erase: function(key){
		var index = this._keys.indexOf(key);
		if (index != -1){
			this._keys.splice(index, 1);
			this._values.splice(index, 1);
			this.length--;
		}
		return this;
	},

	indexOf: function(value){
		return this._values.indexOf(value);
	},

	keyOf: function(value){
		return this._keys[this.indexOf(value)];
	},

	each: function(fn, bind){
		for (var i = 0, l = this.length; i < l; i++){
			fn.call(bind, this._values[i], this._keys[i]);
		}
		return this;
	},

	map: function(fn, bind){
		for (var i = 0, l = this.length; i < l; i++){
			this._values[i] = fn.call(bind, this._values[i], this._keys[i]);
		}
		return this;
	}

});

})((typeof module != 'undefined' && module.exports && require('./Klass.js')) || Klass);
