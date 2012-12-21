define(['Backbone', 'jQuery', 'tpl!templates/itemView.html'], function(Backbone, $, tmpl) {
    var ViewClass = Backbone.View.extend({
        initialize: function() {
            if ('boolean' == typeof this.options.is_root) {
                this.is_root = this.options.is_root;
            }
            this.render();
        },
        is_root: true,
        render: function() {
            this.$el.html( this.getHTML() );
            var ths = this;
            this.model.children().each(function(child) {
                new ViewClass({
                    el: ths.$el.find('#' + ths.getElementIdForItem(child))[0],
                    model: child,
                    is_root: false
                });
            });
        },
        getHTML: function() {
            return tmpl({ item: this.model, ViewClass: ViewClass, view: this, is_root: this.is_root });
        },
        getElementIdForItem: function(item) {
            return item.cid;
        }
    });

    return ViewClass;
});
