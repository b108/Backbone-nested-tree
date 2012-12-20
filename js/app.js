define(['jQuery', 'models/treeItem', 'views/treeItemView'], function($, TreeItem, TreeView) {
    var initialize = function() {
        var item = new TreeItem({ title: 'Hello!' });
        item.add(new TreeItem({ title: 'Hello-2!' }));
        item.add(new TreeItem({ title: 'Hello-3!' }));

        new TreeView({ model: item, el: document.getElementById('tree')});
    };

    return {initialize: initialize};
});
