
(function(Klass, toString){

var merge = function(to, from){
	for (var i in from) to[i] = (toString.call(from[i]) == '[object Object]')
		? merge(from[i], to[i] || {})
		: from[i];
	return to;
};

Klass.Options = new Klass(null, {
	setOptions: function(options){
		if (options) merge(this.options || {}, options);
		return this;
	}
});

})(
	(typeof module != 'undefined' && module.exports && require('./Klass.js')) || Klass,
	Object.prototype.toString
);
