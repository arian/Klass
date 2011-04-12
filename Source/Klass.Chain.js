
(function(Klass){

Klass.Bind = new Klass(null, {

	chain: function(fn){
		(this._chain || (this._chain = [])).push(fn);
		return this;
	},

	callChain: function(){
		return (this._chain && this._chain.length) ? this._chain.shift().apply(this, arguments) : null;
	},

	clearChain: function(){
		delete this._chain;
		return this;
	}

});

})((typeof module != 'undefined' && module.exports && require('./Klass.js')) || Klass);
