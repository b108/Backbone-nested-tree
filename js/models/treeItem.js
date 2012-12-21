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
            return this.collection.models[ this.collection.length - 1 ] == this;
        },
        hasChildren: function() {
            return !!this.attributes.children.length;
        }
    });
});
