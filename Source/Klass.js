
(function(context, prototyping){

var Klass = function Klass(parent, object){

	if (prototyping) return null;

	var kls = function(){
		return (!prototyping && this.init && this.init.apply(this, arguments)) || this;
	};

	// Extending
	if (!parent) parent = Klass;
	prototyping = true;
	var proto = kls.prototype = new parent;
	prototyping = false;

	// Implementing
	(kls.implement = function(props){
		var i = 0, l = arguments.length;
		if (l > 1){
			while (i < l) kls.implement(arguments[i++]);
		} else {
			if (typeof props == 'function') props = props.prototype;
			for (i in props) proto[i] = props[i];
		}
		return kls;
	}).apply(kls, Array.prototype.slice.call(arguments, 1));

	// Extend Class with static methods
	kls.extend = function(props){
		for (var i in props) kls[i] = props[i];
		return kls;
	};

	// Decorate old methods
	kls.decorate = function(decorators){
		for (var name in decorators){
			var method = proto[name];
			if (method && typeof method == 'function') proto[name] = decorators[name].call(kls, method);
		}
		return kls;
	};

	// Parent method
	var parentProto = parent.prototype;
	proto.parent = function(method, args){
		var fn = parentProto[method];
		return fn && typeof fn == 'function' && fn.apply(this, args);
	};

	return kls;

};

if (typeof module != 'undefined' && module.exports) module.exports = Klass;
else context.Klass = Klass;

})(this);
