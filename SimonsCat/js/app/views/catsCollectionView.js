define([
     'text!'+ Common.RootUrl + 'app/views/templates/catsCollectionView.html',
    Common.RootUrl + 'app/views/catView.js'
    ],
function(catsTemplate, catView){

     var chView = catView;

    var view = Backbone.Marionette.CompositeView.extend({
         template: _.template(catsTemplate),
        childView: chView,
        // specify a jQuery selector to put the `childView` instances into
        childViewContainer: "tbody",
        events: {
            'click a.rank_up': 'rank_up',
            'click a.rank_down': 'rank_down'
        },       
        rank_up: function (event) {
            this.collection.trade_rank(this.find_move_cat(event, 'up'), 'up');
            this.render();
        },

        rank_down: function (event) {
            this.collection.trade_rank(this.find_move_cat(event, 'down'), 'down');
            this.render();
        },

        find_move_cat: function (event, direction) {
            var chooseCid = $(event.currentTarget).attr('data');
           
            return this.collection.find(function (cat) {
                return cat.cid == chooseCid
            });
        },
        onRender: function() {
                console.debug("cidView=[" + this.cid + "]catsCollectionView:onRender is occured!");
            },
    });

    return view;
})
