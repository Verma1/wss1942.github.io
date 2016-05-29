Function.prototype.bind = function(that) {
    var method = this,
        slice = Array.prototype.slice;
    var args = slice.apply(arguments, [1]);
    return function() {
        return method.apply(that, args.concat(slice.apply(arguments, [0])));
    };
};