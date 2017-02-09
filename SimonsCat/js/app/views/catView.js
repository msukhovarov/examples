define([
    'text!'+ Common.RootUrl + 'app/views/templates/catTemplate.html'
],
    function(viewTamplate){

         var view = Backbone.Marionette.View.extend({             
               template: _.template(viewTamplate),
               tagName: 'tr',
               className: 'simons_cats',
                onRender: function() {
                console.debug("cidView=[" + this.cid + "] catsView:onRender is occured!");
            },
         });

         return view;
    });