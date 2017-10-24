(function(window, $){
    var Subselect = function(elem, options){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data();
    };

    Subselect.prototype = {
        defaults: {
            sub: null,       // required!
            filter: null,    // required!
            child: 'option', // optional!
            value:  null     // optional!
        },
        init: function() {
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            this.main();
            return this;
        },
        main: function() {
            var that = this;
            this.subElem = jQuery(this.config.sub);
            this.arrElem = this.subElem.children(this.config.child).clone();
            this.$elem.change(function () {
                this.valElem = (that.config.value === null) ? that.$elem.val() : that.config.value;
                that.subElem.children(that.config.child).remove();
                that.arrElem.clone().filter(that.config.filter+this.valElem).appendTo($(that.config.sub));
            }).trigger("change");
        }
    }

    Subselect.defaults = Subselect.prototype.defaults;

    $.fn.subselect = function(options) {
        return this.each(function() {
            new Subselect(this, options).init();
        });
    };

    window.Subselect = Subselect;
})(window, jQuery);
