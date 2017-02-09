define([
        Common.RootUrl + 'app/models/catModel.js',
        Common.RootUrl + 'app/models/catsCollection.js',
        Common.RootUrl + 'app/views/catsCollectionView.js'
],
    function (catModel, catsCollection, catsCollectionView) {
        'use strict';

require(['backbone.radio'], function(Radio){
    var App = Backbone.Marionette.Application.extend({
             region: '#app',
             onStart: function(){

                  // Here we create a bunch of models at the same time as the collection.
            var cats = new catsCollection([
                new catModel({name: 'Cat Sleep', image_path: Common.RootUrl + 'images/cat_sleep.gif'}),
                new catModel({name: 'Cat Santa', image_path:  Common.RootUrl + 'images/cat_santa_320.jpg'}),
                new catModel({name: 'Cat and mouse', image_path: Common.RootUrl + 'images/cat_and_mouse_320.jpg'}),
                new catModel({name: 'Cat on a tree', image_path:  Common.RootUrl + 'images/cat_tree_320.png'})
            ]);

            // Create our view...
            var catsView = new catsCollectionView({collection: cats});

                 this.showView(catsView);
             }
        });

        var app = new App();
        app.start();

        return app;
    });
});