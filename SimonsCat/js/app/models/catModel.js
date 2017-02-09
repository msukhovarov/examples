define([],
function(){
    // Cat model
    var model = Backbone.Model.extend({
        defaults: {
            id: 'none',           
            rank: 0,
            move: ''
        },
        id: 0,
        initialize: function(){
            this.set('id', this.cid);
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
