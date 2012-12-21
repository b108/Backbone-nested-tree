define(['jQuery', 'models/treeItem', 'views/treeItemView'], function($, TreeItem, TreeView) {
    var initialize = function() {
        var item = new TreeItem({ title: 'Hello!' });
        item.add(new TreeItem({ title: 'Раз' }));
        item.add(new TreeItem({ title: 'Два' }));
        item.add(new TreeItem({ title: 'Три!' }));

        item.get('children').at( 2 ).add(new TreeItem({ title: 'Ёлочка, гори!' }));

        new TreeView({ model: item, el: document.getElementById('tree')});
    };

    return {initialize: initialize};
});
