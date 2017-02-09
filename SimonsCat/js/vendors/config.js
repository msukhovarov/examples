var rootUrl = '/js/';

requirejs.config({
    baseUrl: rootUrl + 'vendors/node_modules/',

    paths: {        
        jquery: 'jquery/dist/jquery.min',
        backbone: 'backbone/backbone-min',
        'backbone.radio': 'backbone.radio/build/backbone.radio.min',        
        text: 'text/text',
        'backbone.marionette': 'backbone.marionette/lib/backbone.marionette.min',
        bootstrap: 'bootstrap/dist/js/bootstrap.min',
        underscore: 'underscore/underscore-min',
        common: '../../app/common',
        app: '../../app/app',
    },
    "shim": {
        common : {
            deps: ['underscore'],
            exports: 'Common'
        },
        jquery : {
            exports : 'jQuery'
        },
        bootstrap: {
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery', 'common', 'bootstrap'],
            exports: 'Backbone'
        },
        'backbone.radio' : {
            deps: [],
            exports: 'Radio'
        },
        'backbone.marionette' : {
            deps: ['backbone.radio', 'radio'],
            exports: 'Backbone.Marionette'
        },
        app: {
            deps: ['backbone', 'backbone.marionette'],
            exports: 'App'
        }
    }
});

define('radio', [], function() {
    require(['backbone.radio'], function(Radio) {
    return Radio;
    });
});

/*define('jquery', [], function () {
    return jQuery;
})*/

/*define('underscore', [], function () {
    return _;
});

define('backbone', [], function () {
    return Backbone;
});*/