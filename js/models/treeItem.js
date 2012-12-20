define(['Backbone', 'models/treeItemCollection'], function(Backbone, TreeItemCollection) {
    return Backbone.Model.extend({
        defaults: {
            children: null
        },
        initialize: function() {
            this.set({ children: new TreeItemCollection() });
        },
        children: function() {
            return this.get('children');
        },
        add: function(child) {
            this.children().add(child);
        },
        isLast: function() {
            if (!this.collection) return true;
            return this.collection.at( this.collection.length - 1 ) == this;
        }
    });
});
