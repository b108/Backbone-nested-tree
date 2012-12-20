define(['Backbone', 'models/treeItem'], function(Backbone, TreeItem) {
    return Backbone.Collection.extend({
        model: TreeItem
    });
});
