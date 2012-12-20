define(['Backbone', 'jQuery', 'tpl!templates/itemView.html'], function(Backbone, $, tmpl) {
    var ViewClass = Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html( this.getHTML() );
            var ths = this;
            this.model.children().each(function(child) {
                new ViewClass({
                    el: ths.$el.find('#' + ths.getElementIdForItem(child))[0],
                    model: child
                });
            });
        },
        getHTML: function() {
            return tmpl({ item: this.model, ViewClass: ViewClass, view: this });
        },
        getElementIdForItem: function(item) {
            return item.cid;
        }
    });

    return ViewClass;
});
