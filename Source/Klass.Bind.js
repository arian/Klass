
(function(Klass){

Klass.Bind = new Klass(null, {

	_bound: {},

	bound: function(method, rebind){
		return ((!rebind && this._bound[method]) || (this._bound[method] = this[method].bind(this)));
	}

});

})((typeof module != 'undefined' && module.exports && require('./Klass.js')) || Klass);
