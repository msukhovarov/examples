var rootUrl = 'js';

requirejs.config({
    baseUrl: rootUrl + '/vendors/node_modules',

    paths: {
        //apps: '../apps',
        jquery: 'jquery/dist/jquery.min',
        backbone: 'backbone/backbone-min',
        radio: 'backbone.radio/build/backbone.radio.min',
        text: 'text/text',
        marionette: 'backbone.marionette/lib/backbone.marionette.min',
        bootstrap: 'bootstrap/dist/js/bootstrap.min',
        underscore: 'underscore/underscore-min',
        common: '../../app/common',
        app: '../../app/app',
        //coll: '../../js/catsCollection'
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
        coll: {
            deps: ['backbone', 'text']
        },
        app: {
            deps: ['backbone']//, 'coll']
        }
        /*marionette : {
            deps: ['wreqr', 'eventbinder', 'babysitter'],
            exports: 'Marionette'
        }*/
    }
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