require.config({
	baseUrl:'./js',
	paths: {
		jQuery:"libs/jquery-1.8.3",
        jQueryUI:"libs/jquery-ui-1.9.2.custom.min.js",
        jQueryUINestedSortable:"libs/jquery.mjs.nestedSortable.js",
        tpl: "libs/tpl",
		Backbone:'libs/backbone-min',
		Underscore: "libs/underscore-min",
		models: "models",
		views: "views",
        templates: "./../templates"
	},
	shim:{
		'jQuery':{
			exports: 'jQuery'
		},
        'jQueryUI': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        'jQueryUINestedSortable': {
            deps: ['jQueryUI'],
            exports: 'jQuery'
        },
		'Underscore':{
			deps: ['jQuery'],
			exports: 'Underscore'
		},
		'Backbone': {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps: ['Underscore', 'jQuery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'Backbone'
		}
	}

});

require([
	'app',
	'jQuery',
	'Underscore',
	'Backbone'
], function(App){
	App.initialize();
});
