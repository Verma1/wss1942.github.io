var $ = function(selector, context) {
    return new $.fn.init(selector, context);
}

$.fn = $.prototype;

$.fn.init = function(selector, context) {
    var nodelist = (context || document).querySelectorAll(selector),
        i;
    this.length = nodelist.length;
    for (i = 0; i < this.length; i += 1) {
        this[i] = nodelist[i];
    }

    return this;
};

$.fn.hide = function() {
    this.each(function() {
        this.style.display = 'none';
    });

    return this;
}

$.fn.each = function(fn) {
    var length = this.length,
        i;

    for (i = 0; i < length; i += 1) {
        fn.call(this[i], i, this[i]);
    }
}

$('#n').hide();