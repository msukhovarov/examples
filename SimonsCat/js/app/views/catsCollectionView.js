define([Common.RootUrl + '/app/views/catView.js'],
function(catView){
    var view = Backbone.View.extend({

        el: $("div#contents"),

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
            var classes = $(event.currentTarget).attr('class').split(' ');
            var cid = _.find(classes, function (c) {
                return c != ('rank_' + direction)
            });
            return this.collection.find(function (cat) {
                return cat.cid == cid
            });
        },

        // Show it!
        render: function () {
            var header = $("table#simons_cats tr.header").clone();
            $("table#simons_cats > tbody:last").html('').append(header);

            this.collection.sort();
            this.collection.each(function (cat) {
                var view = new catView({model: cat});
                $("table#simons_cats > tbody:last").append(view.render().el);
            });
        }
    });

    return view;
})
