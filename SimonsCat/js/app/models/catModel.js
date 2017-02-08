define([],
function(){
    // Cat model
    var model = Backbone.Model.extend({
        defaults: {
            rank: 0,
            move: ''
        },

        rank_up: function () {
            this.set('move', 'up')
        },
        rank_down: function () {
            this.set('move', 'down')
        }
    });

    return model;
});
