define([
    'text!'+ Common.RootUrl + '/app/views/templates/catTemplate.html'
],
    function(catRowView){
        // The View for an Individual Cat
        var view = Backbone.View.extend({

            // This is responsible for automatically updating the UI
            // in response to changes in the model
            initialize: function () {
                this.model.on('change', this.render, this);
            },

            tagName: 'tr',

            className: 'simons_cats',

            render: function () {

                var tpl = _.template(catRowView);
                $(this.el).html(tpl({
                    id: this.model.cid,
                    rank: this.model.get('rank'),
                    name: this.model.get('name'),
                    image_path: this.model.get('image_path')
                }));

                return this;
            }
        });

        return view;
    });